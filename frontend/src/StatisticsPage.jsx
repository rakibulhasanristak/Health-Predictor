import React from 'react';

function StatisticsPage() {
  return (
    <div className="stats-page glass-container">
      <h1 className="form-title">Global Breast Cancer Statistics</h1>
      
      <div className="stat-card">
        <h3>Global Incidence</h3>
        <p>Breast cancer is the world's most prevalent cancer. In 2022, there were <strong>2.3 million</strong> women diagnosed with breast cancer.</p>
      </div>

      <div className="stat-card">
        <h3>Mortality</h3>
        <p>It is the leading cause of cancer death in women globally. There were <strong>670,000</strong> deaths from breast cancer in 2022.</p>
      </div>

      <div className="stat-card">
        <h3>Survival Rates</h3>
        <p>Survival rates vary greatly worldwide. In high-income countries, the 5-year survival rate is over <strong>90%</strong>, while it can be as low as <strong>40%</strong> in some low-income countries due to late diagnosis and lack of access to treatment.</p>
      </div>

      <p className="data-source">Source: World Health Organization (WHO), 2023</p>
    </div>
  );
}

export default StatisticsPage;
