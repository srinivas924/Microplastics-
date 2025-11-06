import React, { useState } from 'react';
import { Brain, Heart, Stethoscope, AlertCircle, Info } from 'lucide-react';
import './HealthImpacts.css';

const HealthImpacts = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const healthData = [
    {
      id: 'brain',
      organ: 'Brain',
      icon: Brain,
      position: { top: '15%', left: '50%' },
      effects: [
        'Neuroinflammation and oxidative stress',
        'Potential link to dementia and cognitive decline',
        '50% increase in brain microplastics since 2016',
        'Particles cross blood-brain barrier',
      ],
      risk: 'High',
    },
    {
      id: 'heart',
      organ: 'Heart & Blood',
      icon: Heart,
      position: { top: '35%', left: '45%' },
      effects: [
        '4.5x higher risk of stroke',
        'Cardiovascular disease acceleration',
        'Found in arterial plaques',
        'Blood clotting abnormalities',
      ],
      risk: 'Critical',
    },
    {
      id: 'lungs',
      organ: 'Lungs',
      icon: Stethoscope,
      position: { top: '30%', left: '55%' },
      effects: [
        'Respiratory inflammation',
        'Asthma exacerbation',
        'Inhaled from air pollution',
        'Chronic breathing issues',
      ],
      risk: 'High',
    },
    {
      id: 'gut',
      organ: 'Digestive System',
      icon: AlertCircle,
      position: { top: '55%', left: '50%' },
      effects: [
        'Gut microbiome disruption',
        'Inflammatory bowel disease links',
        'Intestinal barrier damage',
        'Absorption of toxins',
      ],
      risk: 'Moderate',
    },
  ];

  return (
    <div className="health-page">
      <section className="health-hero">
        <div className="container">
          <h1 className="page-title">Human Health Impacts</h1>
          <p className="page-subtitle">
            The 2025 scientific consensus: Microplastics are not just in our environment—they're accumulating 
            in our bodies with serious health consequences.
          </p>
        </div>
      </section>

      {/* Anatomical Diagram */}
      <section className="section anatomy-section">
        <div className="container">
          <h2 className="section-title">Where Microplastics Accumulate</h2>
          <p className="section-subtitle">Click on organs to learn about specific health impacts</p>
          
          <div className="anatomy-container">
            <div className="body-outline">
              <img 
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600" 
                alt="Human anatomy" 
                className="body-image"
              />
              <div className="organ-markers">
                {healthData.map((organ) => {
                  const Icon = organ.icon;
                  return (
                    <div
                      key={organ.id}
                      className={`organ-marker ${activeTooltip === organ.id ? 'active' : ''}`}
                      style={organ.position}
                      onClick={() => setActiveTooltip(activeTooltip === organ.id ? null : organ.id)}
                    >
                      <div className="marker-pulse" />
                      <div className="marker-icon">
                        <Icon size={24} />
                      </div>
                      {activeTooltip === organ.id && (
                        <div className="organ-tooltip">
                          <div className="tooltip-header">
                            <h4>{organ.organ}</h4>
                            <span className={`risk-badge ${organ.risk.toLowerCase()}`}>
                              {organ.risk} Risk
                            </span>
                          </div>
                          <ul className="effects-list">
                            {organ.effects.map((effect, index) => (
                              <li key={index}>{effect}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brain Focus */}
      <section className="section brain-section">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-content">
              <div className="detail-icon">
                <Brain size={64} />
              </div>
              <h2>Brain Invasion: The 2025 Breakthrough</h2>
              <p>
                Groundbreaking research from Stanford and UNM revealed that microplastic concentrations 
                in human brains have increased by 50% since 2016. These particles cross the blood-brain 
                barrier, accumulating in critical neural tissues.
              </p>
              <div className="detail-stats">
                <div className="stat-item">
                  <div className="stat-value">0.5%</div>
                  <div className="stat-label">Brain weight as plastic</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">12+</div>
                  <div className="stat-label">Plastic types found</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Of tested samples</div>
                </div>
              </div>
              <div className="research-note">
                <Info size={20} />
                <p>
                  Studies link microplastic exposure to neuroinflammation, behavioral changes, and 
                  potential early-onset dementia. Long-term effects still being researched.
                </p>
              </div>
            </div>
            <div className="detail-image">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800" 
                alt="Brain research"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cardiovascular Focus */}
      <section className="section cardio-section">
        <div className="container">
          <div className="detail-grid reverse">
            <div className="detail-image">
              <img 
                src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800" 
                alt="Heart health"
              />
            </div>
            <div className="detail-content">
              <div className="detail-icon">
                <Heart size={64} />
              </div>
              <h2>Cardiovascular Crisis</h2>
              <p>
                A 2024 landmark study found that patients with microplastics in arterial plaques had a 
                4.5 times higher risk of stroke, heart attack, or death compared to those without. 
                Particles cause inflammation and blood vessel damage.
              </p>
              <div className="detail-stats">
                <div className="stat-item">
                  <div className="stat-value">4.5x</div>
                  <div className="stat-label">Higher stroke risk</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">60%</div>
                  <div className="stat-label">Patients with plaques</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">20µm</div>
                  <div className="stat-label">Average particle size</div>
                </div>
              </div>
              <div className="research-note">
                <Info size={20} />
                <p>
                  Microplastics trigger oxidative stress, blood clotting abnormalities, and chronic 
                  inflammation—key drivers of cardiovascular disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Effects */}
      <section className="section other-effects-section">
        <div className="container">
          <h2 className="section-title">Additional Health Concerns</h2>
          <div className="effects-grid">
            <div className="effect-card">
              <h3>Cancer Risks</h3>
              <p>
                Microplastics carry carcinogenic chemicals like BPA and phthalates. Studies show potential 
                links to colorectal cancer, liver tumors, and endocrine disruption.
              </p>
            </div>
            <div className="effect-card">
              <h3>Reproductive Issues</h3>
              <p>
                Found in human placenta, blood, and breast milk. Linked to reduced fertility, hormonal 
                imbalances, and developmental problems in fetuses.
              </p>
            </div>
            <div className="effect-card">
              <h3>Immune Suppression</h3>
              <p>
                Chronic exposure weakens immune response, increasing susceptibility to infections and 
                autoimmune disorders. Particles act as carriers for pathogens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Note */}
      <section className="section ethical-note-section">
        <div className="container">
          <div className="ethical-card">
            <h2>Convenience vs. Legacy</h2>
            <p>
              Every plastic product we use today could become a microplastic tomorrow—potentially ending up 
              in our children's brains or our own hearts. The question isn't just "Is it convenient?" but 
              "Are we poisoning our future selves and generations to come?"
            </p>
            <div className="ethical-question">
              <strong>The Ethical Dilemma:</strong> Do corporations that profit from single-use plastics bear 
              responsibility for the health crisis they've created? Should they fund cleanup and research?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthImpacts;
