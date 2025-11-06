import React, { useState } from 'react';
import { Droplets, Factory, Wind, Fish, ChevronLeft, ChevronRight } from 'lucide-react';
import './ThreatExplained.css';

const ThreatExplained = () => {
  const [timelineYear, setTimelineYear] = useState(2025);

  const timelineData = [
    { year: 1950, event: 'Plastic production begins', amount: '2M tons/year' },
    { year: 1980, event: 'Microplastics term coined', amount: '80M tons/year' },
    { year: 2000, event: 'Ocean gyres discovered', amount: '200M tons/year' },
    { year: 2016, event: 'Found in human organs', amount: '335M tons/year' },
    { year: 2025, event: 'Current crisis level', amount: '460M tons/year' },
    { year: 2050, event: 'Projected (if unchanged)', amount: 'Plastics > Fish by weight' },
  ];

  const currentIndex = timelineData.findIndex((item) => item.year === timelineYear);

  const nextYear = () => {
    const nextIndex = (currentIndex + 1) % timelineData.length;
    setTimelineYear(timelineData[nextIndex].year);
  };

  const prevYear = () => {
    const prevIndex = currentIndex === 0 ? timelineData.length - 1 : currentIndex - 1;
    setTimelineYear(timelineData[prevIndex].year);
  };

  return (
    <div className="threat-page">
      <section className="threat-hero">
        <div className="container">
          <h1 className="page-title">Understanding the Threat</h1>
          <p className="page-subtitle">
            Microplastics are everywhere. Learn about their sources, spread, and why they're one of the 
            greatest environmental challenges of our time.
          </p>
        </div>
      </section>

      {/* What Are Microplastics */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Are Microplastics?</h2>
          <div className="definition-grid">
            <div className="definition-card">
              <div className="definition-icon primary-icon">
                <Factory size={40} />
              </div>
              <h3>Primary Microplastics</h3>
              <p>
                Manufactured to be small (< 5mm). Found in cosmetics, toothpaste, industrial abrasives, 
                and pre-production plastic pellets called "nurdles."
              </p>
              <ul>
                <li>Microbeads in personal care products</li>
                <li>Plastic pellets from manufacturing</li>
                <li>Synthetic fibers from clothing</li>
              </ul>
            </div>
            <div className="definition-card">
              <div className="definition-icon secondary-icon">
                <Droplets size={40} />
              </div>
              <h3>Secondary Microplastics</h3>
              <p>
                Result from breakdown of larger plastics through sun, wind, and water. Account for 68-81% 
                of all microplastics in the environment.
              </p>
              <ul>
                <li>Degraded bottles and bags</li>
                <li>Tire dust from vehicles</li>
                <li>Fragmented fishing gear</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How They Spread */}
      <section className="section spread-section">
        <div className="container">
          <h2 className="section-title">How They Spread</h2>
          <p className="section-subtitle">The invisible journey from source to everywhere</p>
          <div className="spread-grid">
            <div className="spread-card">
              <Wind className="spread-icon" size={48} />
              <h3>Through Air</h3>
              <p>
                Tire dust, synthetic fibers, and degraded plastics become airborne. Studies found microplastics 
                in rain, snow, and even remote mountain peaks.
              </p>
              <div className="stat-highlight">40,000 tons/year deposited via wind</div>
            </div>
            <div className="spread-card">
              <Droplets className="spread-icon" size={48} />
              <h3>Via Wastewater</h3>
              <p>
                From washing machines, industrial runoff, and sewage. Treatment plants can't filter out particles 
                this small, releasing billions into waterways daily.
              </p>
              <div className="stat-highlight">8-14M tons/year enter oceans</div>
            </div>
            <div className="spread-card">
              <Fish className="spread-icon" size={48} />
              <h3>Food Web Entry</h3>
              <p>
                Plankton consume microplastics, then are eaten by fish, which we eat. Bioaccumulation means 
                top predators (including humans) have the highest concentrations.
              </p>
              <div className="stat-highlight">99% of seawater contains microplastics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Slider */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">The Escalation Timeline</h2>
          <p className="section-subtitle">From convenience to crisis in 75 years</p>
          
          <div className="timeline-slider">
            <button onClick={prevYear} className="timeline-nav" aria-label="Previous year">
              <ChevronLeft size={32} />
            </button>
            
            <div className="timeline-display">
              <div className="timeline-year">{timelineData[currentIndex].year}</div>
              <div className="timeline-event">{timelineData[currentIndex].event}</div>
              <div className="timeline-amount">{timelineData[currentIndex].amount}</div>
            </div>
            
            <button onClick={nextYear} className="timeline-nav" aria-label="Next year">
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="timeline-track">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-marker ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setTimelineYear(item.year)}
              >
                <div className="marker-dot" />
                <div className="marker-label">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Table */}
      <section className="section stats-table-section">
        <div className="container">
          <h2 className="section-title">2025 By The Numbers</h2>
          <div className="stats-table">
            <div className="table-row header-row">
              <div className="table-cell">Source</div>
              <div className="table-cell">Annual Amount</div>
              <div className="table-cell">Impact</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Tire Dust</div>
              <div className="table-cell">1.5M tons/year</div>
              <div className="table-cell">28% of ocean microplastics</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Textiles</div>
              <div className="table-cell">500K tons/year</div>
              <div className="table-cell">35% of primary microplastics</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Packaging Breakdown</div>
              <div className="table-cell">3-6M tons/year</div>
              <div className="table-cell">45% of ocean surface plastics</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Fishing Gear</div>
              <div className="table-cell">640K tons/year</div>
              <div className="table-cell">10% of all ocean plastic</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Personal Care Products</div>
              <div className="table-cell">8K tons/year</div>
              <div className="table-cell">2% (declining due to bans)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>The Science is Clear</h2>
            <p>
              Microplastics are not just an environmental problem—they're a human health crisis. 
              Every day we delay action, more particles enter our bodies and ecosystems.
            </p>
            <div className="cta-buttons">
              <a href="/health" className="btn-primary">Explore Health Impacts</a>
              <a href="/solutions" className="btn-secondary">What Can I Do?</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatExplained;
