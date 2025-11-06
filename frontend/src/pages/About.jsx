import React from 'react';
import { Target, Users, BookOpen, ExternalLink } from 'lucide-react';
import './About.css';

const About = () => {
  const sources = [
    {
      title: 'Stanford Brain Tracking Study',
      year: '2024',
      description: '50% increase in brain microplastics since 2016',
      link: 'https://www.stanford.edu',
    },
    {
      title: 'University of New Mexico Cardiovascular Research',
      year: '2024',
      description: '4.5x higher cardiovascular risk with microplastic presence',
      link: 'https://www.unm.edu',
    },
    {
      title: 'UNEP Marine Pollution Assessment',
      year: '2025',
      description: 'Global assessment of 8-14M tons annual ocean plastic entry',
      link: 'https://www.unep.org',
    },
    {
      title: 'EPA Environmental Research Updates',
      year: '2025',
      description: 'Comprehensive U.S. microplastic impact studies',
      link: 'https://www.epa.gov',
    },
  ];

  const teamMembers = [
    {
      name: '[Your Name]',
      role: 'Campaign Creator',
      description: 'Passionate about environmental education and public health awareness.',
    },
    {
      name: 'Research Contributors',
      role: 'Scientific Advisors',
      description: 'Team of researchers ensuring accuracy and up-to-date information.',
    },
    {
      name: 'Community Volunteers',
      role: 'Outreach & Education',
      description: 'Dedicated individuals spreading awareness in their communities.',
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About This Campaign</h1>
          <p className="page-subtitle">
            A grassroots educational initiative to raise awareness about the microplastics crisis 
            threatening human health and environmental sustainability.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-icon-wrapper">
              <Target className="mission-icon" size={120} />
            </div>
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p>
                To educate students, families, and policymakers about the invisible threat of microplastics—
                tiny particles infiltrating our oceans, air, food, and bodies. Through accessible science, 
                compelling visuals, and actionable solutions, we empower individuals to make informed choices 
                and advocate for systemic change.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <div className="value-icon">📚</div>
                  <h4>Education First</h4>
                  <p>Evidence-based information from peer-reviewed research</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌍</div>
                  <h4>Global Perspective</h4>
                  <p>Understanding impacts across ecosystems and communities</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">💚</div>
                  <h4>Action-Oriented</h4>
                  <p>Practical steps anyone can take today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why This Campaign Exists</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3>Urgent Health Crisis</h3>
              <p>
                2025 research reveals microplastics in human brains, hearts, and plaques—linked to 
                dementia, strokes, and chronic diseases. The time for awareness is now.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">02</div>
              <h3>Environmental Collapse</h3>
              <p>
                By 2050, oceans will contain more plastic than fish by weight. Marine life, soil health, 
                and biodiversity face irreversible damage without immediate action.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">03</div>
              <h3>Knowledge Gap</h3>
              <p>
                Despite widespread plastic use, most people don't know about microplastics, their sources, 
                or how to reduce exposure. Education bridges this gap.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">04</div>
              <h3>Collective Power</h3>
              <p>
                Individual actions (reusable bottles, filters, policy advocacy) multiply into systemic 
                change when communities unite around shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Cited */}
      <section className="section sources-section">
        <div className="container">
          <h2 className="section-title">Sources & Research</h2>
          <p className="section-subtitle">
            All information on this site is based on peer-reviewed scientific research and reports from 
            reputable organizations.
          </p>
          <div className="sources-grid">
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="source-card"
              >
                <BookOpen className="source-icon" size={32} />
                <div className="source-year">{source.year}</div>
                <h4>{source.title}</h4>
                <p>{source.description}</p>
                <div className="source-link">
                  View Source <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <Users className="team-icon" size={48} />
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <h2>Join the Movement</h2>
            <p>
              This campaign thrives on community participation. Whether you're a student researching a 
              project, a parent concerned about your family's health, or a policymaker seeking evidence—
              you're in the right place.
            </p>
            <div className="cta-buttons">
              <a href="/solutions" className="btn-primary">Take Action Now</a>
              <a href="/resources" className="btn-secondary">Explore Resources</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
