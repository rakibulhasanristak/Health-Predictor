import React from 'react';

function InformationPage() {
  return (
    <div className="info-page glass-container">
      <h1 className="form-title">Understanding Breast Cancer</h1>
      
      <div className="info-section">
        <h2>What Causes Breast Cancer?</h2>
        <p>The exact cause of breast cancer isn't fully understood, but a combination of genetic, hormonal, lifestyle, and environmental factors can increase the risk. Key risk factors include being female, aging, a personal or family history of breast cancer, and certain genetic mutations like BRCA1 and BRCA2.</p>
      </div>

      <div className="info-section">
        <h2>What is Avoidable? (Lifestyle Factors)</h2>
        <ul>
          <li><strong>Limit Alcohol:</strong> The more alcohol you drink, the greater your risk of developing breast cancer.</li>
          <li><strong>Maintain a Healthy Weight:</strong> Being overweight or obese, especially after menopause, increases breast cancer risk.</li>
          <li><strong>Be Physically Active:</strong> Regular physical activity can help you maintain a healthy weight and lower your risk.</li>
          <li><strong>Avoid Exposure to Radiation:</strong> Medical-imaging methods, such as CT scans, use high doses of radiation. While necessary in many cases, cumulative exposure can be a risk factor.</li>
        </ul>
      </div>

      <div className="info-section">
        <h2>What to Maintain for Better Health</h2>
        <ul>
          <li><strong>Healthy Diet:</strong> Eating a diet rich in fruits, vegetables, and whole grains, and low in saturated fat, can be beneficial.</li>
          <li><strong>Regular Check-ups:</strong> Perform regular breast self-exams and schedule clinical breast exams and mammograms as recommended by your doctor.</li>
          <li><strong>Know Your Family History:</strong> Be aware of your family's health history and discuss it with your healthcare provider.</li>
        </ul>
        <p className="disclaimer"><strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice.</p>
      </div>
    </div>
  );
}

export default InformationPage;
