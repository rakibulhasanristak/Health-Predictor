import React, { useState } from 'react';
import axios from 'axios';

// Main component for the prediction form
function PredictionForm() {
  // State to hold all the form data for the new model
  const [formData, setFormData] = useState({
    mean_radius: 17.99,
    mean_texture: 10.38,
    mean_perimeter: 122.8,
    mean_area: 1001.0,
    mean_smoothness: 0.1184,
  });

  // State to hold the prediction result from the API
  const [result, setResult] = useState(null);
  // State to manage loading status while waiting for API response
  const [isLoading, setIsLoading] = useState(false);
  // State to hold any potential errors
  const [error, setError] = useState('');

  // Handles changes for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: Number(value), // Ensure the value is a number
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser refresh
    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      // Use the production API URL from environment variables
      const apiUrl = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000') + '/predict';
      const response = await axios.post(apiUrl, formData);
      setResult(response.data); // Store the prediction result
    } catch (err) {
      setError('Failed to get a prediction. Please check if the API server is running.');
      console.error(err);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="glass-container">
      <h1 className="form-title">Breast Cancer Prediction</h1>
      <p className="form-subtitle">
        Enter tumor characteristics to predict its diagnosis.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mean_radius" className="form-label">Mean Radius</label>
          <input id="mean_radius" type="number" step="any" name="mean_radius" value={formData.mean_radius} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="mean_texture" className="form-label">Mean Texture</label>
          <input id="mean_texture" type="number" step="any" name="mean_texture" value={formData.mean_texture} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="mean_perimeter" className="form-label">Mean Perimeter</label>
          <input id="mean_perimeter" type="number" step="any" name="mean_perimeter" value={formData.mean_perimeter} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="mean_area" className="form-label">Mean Area</label>
          <input id="mean_area" type="number" step="any" name="mean_area" value={formData.mean_area} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="mean_smoothness" className="form-label">Mean Smoothness</label>
          <input id="mean_smoothness" type="number" step="any" name="mean_smoothness" value={formData.mean_smoothness} onChange={handleChange} className="form-input" />
        </div>

        <button type="submit" disabled={isLoading} className="predict-btn">
          {isLoading ? 'Analyzing...' : 'Predict Diagnosis'}
        </button>
      </form>

      {result && (
        <div className={`result-card ${result.prediction === 0 ? 'malignant' : 'benign'}`}>
          <h2 className="result-title">Prediction Result</h2>
          <p className="result-diagnosis">
            {result.prediction_label}
          </p>
          <p className="result-probability">
            Probability of Benign: <strong>{(result.probability_benign * 100).toFixed(2)}%</strong>
          </p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default PredictionForm;
