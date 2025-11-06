import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, AlertTriangle, Brain, Waves } from 'lucide-react';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '300', label: 'Particles ingested daily by humans', icon: AlertTriangle },
    { number: '50%', label: 'Increase in brain microplastics since 2016', icon: Brain },
    { number: '99%', label: 'Of seawater contains microplastics', icon: Waves },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(77, 212, 172, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const scrollToVideo = () => {
    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Microplastics: The Invisible Threat
          </h1>
          <p className="hero-subtitle">
            In Your Body, In Our World
          </p>
          <p className="hero-description">
            Tiny particles smaller than 5mm are infiltrating our oceans, air, food, and even our brains. 
            It's time to understand the hidden danger threatening human health and our planet's future.
          </p>
          <div className="hero-buttons">
            <Link to="/threat" className="btn-primary">
              Learn the Science <ArrowRight size={20} />
            </Link>
            <button onClick={scrollToVideo} className="btn-secondary">
              <Play size={20} /> Watch Explainer
            </button>
          </div>
        </div>
      </section>

      {/* Stats Carousel */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-carousel">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`stat-card ${currentStat === index ? 'active' : ''}`}
                >
                  <Icon className="stat-icon" size={48} />
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
          <div className="carousel-dots">
            {stats.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentStat === index ? 'active' : ''}`}
                onClick={() => setCurrentStat(index)}
                aria-label={`View stat ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="video-section">
        <div className="container">
          <h2 className="section-title">The Journey of a Microplastic</h2>
          <p className="section-subtitle">
            Watch how a single plastic particle travels from a water bottle to your brain
          </p>
          <div className="video-container">
            <div className="video-placeholder">
              <div className="video-content">
                <Play size={80} className="play-icon" />
                <p className="video-text">Interactive Animation: From Bottle to Brain</p>
                <div className="animation-preview">
                  <div className="animation-step">
                    <div className="step-icon">1</div>
                    <p>Plastic bottle breaks down in sun & water</p>
                  </div>
                  <div className="animation-step">
                    <div className="step-icon">2</div>
                    <p>Microplastics enter water supply</p>
                  </div>
                  <div className="animation-step">
                    <div className="step-icon">3</div>
                    <p>Consumed through drinking water & food</p>
                  </div>
                  <div className="animation-step">
                    <div className="step-icon">4</div>
                    <p>Particles accumulate in organs & brain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="container">
          <h2 className="section-title">Explore the Impact</h2>
          <div className="quick-links-grid">
            <Link to="/health" className="quick-link-card">
              <div className="card-icon health">🧠</div>
              <h3>Health Impacts</h3>
              <p>Discover how microplastics affect your brain, heart, and overall health</p>
              <span className="learn-more">Learn More <ArrowRight size={16} /></span>
            </Link>
            <Link to="/environment" className="quick-link-card">
              <div className="card-icon environment">🌊</div>
              <h3>Environmental Toll</h3>
              <p>See the devastating effects on marine life, ecosystems, and our planet</p>
              <span className="learn-more">Learn More <ArrowRight size={16} /></span>
            </Link>
            <Link to="/solutions" className="quick-link-card">
              <div className="card-icon solutions">♻️</div>
              <h3>Take Action</h3>
              <p>Calculate your plastic footprint and pledge to make a difference</p>
              <span className="learn-more">Take Quiz <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
