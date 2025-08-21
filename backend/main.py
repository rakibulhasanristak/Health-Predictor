# 1. Import necessary libraries
import joblib
import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# 2. Define the new data structure for breast cancer prediction
# Note: Pydantic models use underscores, but our model was trained on names with spaces.
# We will handle this conversion inside the prediction endpoint.
class BreastCancerInput(BaseModel):
    mean_radius: float
    mean_texture: float
    mean_perimeter: float
    mean_area: float
    mean_smoothness: float

# 3. Initialize the FastAPI application
app = FastAPI(title="Breast Cancer Prediction API")

# 4. Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. Load the newly trained breast cancer model and the scaler
try:
    model = joblib.load('breast_cancer_model.pkl')
    scaler = joblib.load('scaler.pkl')
except FileNotFoundError:
    model = None
    scaler = None
    print("Error: Model or scaler file not found. Make sure 'breast_cancer_model.pkl' and 'scaler.pkl' are in the backend directory.")

# 6. Define the root endpoint
@app.get("/")
def read_root():
    return {"status": "API is running successfully"}

# 7. Define the prediction endpoint for the new model
@app.post("/predict")
def predict_cancer(data: BreastCancerInput):
    if model is None or scaler is None:
        return {"error": "Model not loaded. Cannot make predictions."}

    # Convert the incoming Pydantic model to a dictionary
    input_data = data.dict()
    
    # Create a pandas DataFrame from the dictionary
    input_df = pd.DataFrame([input_data])

    # IMPORTANT: Rename the columns to match the feature names the model was trained on (with spaces)
    input_df.rename(columns={
        'mean_radius': 'mean radius',
        'mean_texture': 'mean texture',
        'mean_perimeter': 'mean perimeter',
        'mean_area': 'mean area',
        'mean_smoothness': 'mean smoothness'
    }, inplace=True)

    # Scale the features using the loaded scaler
    scaled_features = scaler.transform(input_df)

    # Make a prediction
    prediction = model.predict(scaled_features)
    
    # Get the probability of the positive class (1 = benign)
    probability = model.predict_proba(scaled_features)[0][1]

    # Return the prediction and probability
    # Target names: 0 = malignant, 1 = benign
    return {
        "prediction": int(prediction[0]),
        "prediction_label": "Benign" if int(prediction[0]) == 1 else "Malignant",
        "probability_benign": round(float(probability), 4)
    }

