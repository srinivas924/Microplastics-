import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Waves, Fish, Leaf } from 'lucide-react';
import './EnvironmentalToll.css';

const EnvironmentalToll = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1708864162641-c748729de0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHBsYXN0aWMlMjBwb2xsdXRpb258ZW58MHx8fHwxNzYyNDUyNDY5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Plastic waste choking our oceans',
    },
    {
      url: 'https://images.unsplash.com/photo-1534527431390-5d41c7e60c1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxzZWElMjB0dXJ0bGUlMjBwbGFzdGljfGVufDB8fHx8MTc2MjQ1MjQ4NHww&ixlib=rb-4.1.0&q=85',
      caption: 'Sea turtle entangled in plastic debris',
    },
    {
      url: 'https://images.unsplash.com/photo-1622391543141-a522421627cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtaWNyb3BsYXN0aWNzfGVufDB8fHx8MTc2MjQ1MjQ3NXww&ixlib=rb-4.1.0&q=85',
      caption: 'Microplastic particles in water sample',
    },
    {
      url: 'https://images.unsplash.com/photo-1706612204508-d48772f8731b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxvY2VhbiUyMHBsYXN0aWMlMjBwb2xsdXRpb258ZW58MHx8fHwxNzYyNDUyNDY5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Beach pollution: remnants of convenience',
    },
    {
      url: 'https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwd2FzdGV8ZW58MHx8fHwxNzYyNDUyNDg5fDA&ixlib=rb-4.1.0&q=85',
      caption: 'Plastic waste accumulation in landfills',
    },
    {
      url: 'https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg',
      caption: 'Ocean surface covered with plastic debris',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <div className="environment-page">
      <section className="environment-hero">
        <div className="container">
          <h1 className="page-title">Environmental Devastation</h1>
          <p className="page-subtitle">
            From coral reefs to soil ecosystems, microplastics are disrupting every corner of our planet. 
            See the visual evidence of humanity's plastic legacy.
          </p>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">The Visual Evidence</h2>
          <p className="section-subtitle">Real images showing the scale of plastic pollution</p>
          
          <div className="carousel-container">
            <button onClick={prevImage} className="carousel-nav prev" aria-label="Previous image">
              <ChevronLeft size={32} />
            </button>
            
            <div className="carousel-main">
              <div className="carousel-image-wrapper">
                <img 
                  src={galleryImages[currentImageIndex].url} 
                  alt={galleryImages[currentImageIndex].caption}
                  className="carousel-image"
                />
                <div className="carousel-caption">
                  {galleryImages[currentImageIndex].caption}
                </div>
              </div>
            </div>
            
            <button onClick={nextImage} className="carousel-nav next" aria-label="Next image">
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="carousel-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bioaccumulation */}
      <section className="section bioaccumulation-section">
        <div className="container">
          <h2 className="section-title">The Food Web Connection</h2>
          <p className="section-subtitle">One particle's journey from plankton to your plate</p>
          
          <div className="food-chain">
            <div className="chain-step">
              <div className="chain-icon">🦠</div>
              <h3>Plankton</h3>
              <p>Microscopic organisms mistake microplastics for food</p>
              <div className="concentration">Base Level</div>
            </div>
            <div className="chain-arrow">→</div>
            <div className="chain-step">
              <div className="chain-icon">🐟</div>
              <h3>Small Fish</h3>
              <p>Consume contaminated plankton, accumulating plastics</p>
              <div className="concentration">10x Concentration</div>
            </div>
            <div className="chain-arrow">→</div>
            <div className="chain-step">
              <div className="chain-icon">🐬</div>
              <h3>Larger Fish</h3>
              <p>Eat smaller fish, toxins multiply in their bodies</p>
              <div className="concentration">100x Concentration</div>
            </div>
            <div className="chain-arrow">→</div>
            <div className="chain-step">
              <div className="chain-icon">🧑</div>
              <h3>Humans</h3>
              <p>Top of food chain = highest microplastic concentration</p>
              <div className="concentration critical">1000x+ Concentration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section impact-areas-section">
        <div className="container">
          <h2 className="section-title">Ecosystems Under Threat</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <Waves className="impact-icon" size={56} />
              <h3>Marine Ecosystems</h3>
              <ul>
                <li>Coral bleaching accelerated by plastic chemicals</li>
                <li>99% of seabirds will ingest plastic by 2050</li>
                <li>Over 800 species affected by marine debris</li>
                <li>Ocean garbage patches covering millions of sq km</li>
              </ul>
              <div className="impact-stat">100,000+ marine animals killed annually</div>
            </div>
            
            <div className="impact-card">
              <Fish className="impact-icon" size={56} />
              <h3>Wildlife & Biodiversity</h3>
              <ul>
                <li>Ingestion causing starvation and internal injuries</li>
                <li>Entanglement in fishing gear and plastic waste</li>
                <li>Toxic chemical leaching into animal tissues</li>
                <li>Disrupted migration and breeding patterns</li>
              </ul>
              <div className="impact-stat">1 million seabirds die from plastic yearly</div>
            </div>
            
            <div className="impact-card">
              <Leaf className="impact-icon" size={56} />
              <h3>Soil & Agriculture</h3>
              <ul>
                <li>Microplastics alter soil structure and fertility</li>
                <li>Reduced water retention in contaminated soils</li>
                <li>Plant growth inhibition from plastic particles</li>
                <li>Entry into terrestrial food chains</li>
              </ul>
              <div className="impact-stat">Agricultural soils: 4-23x more plastics than oceans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projections */}
      <section className="section projections-section">
        <div className="container">
          <div className="projection-card">
            <h2>2050 Projections: If Nothing Changes</h2>
            <div className="projection-grid">
              <div className="projection-item">
                <div className="projection-number">12B</div>
                <div className="projection-label">Metric tons of plastic in landfills</div>
              </div>
              <div className="projection-item">
                <div className="projection-number">></div>
                <div className="projection-label">More plastic than fish in oceans by weight</div>
              </div>
              <div className="projection-item">
                <div className="projection-number">99%</div>
                <div className="projection-label">Of all seabirds with ingested plastic</div>
              </div>
              <div className="projection-item">
                <div className="projection-number">0</div>
                <div className="projection-label">Plastic-free marine environments remaining</div>
              </div>
            </div>
            <p className="projection-note">
              These aren't distant possibilities—they're the trajectory we're on. But change is still possible.
            </p>
            <a href="/solutions" className="btn-primary">Explore Solutions</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalToll;
