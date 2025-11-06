import React, { useState } from 'react';
import { ExternalLink, BookOpen, Newspaper, Send, Search } from 'lucide-react';
import './Resources.css';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', story: '' });

  const resources = [
    {
      title: 'UNEP Report: From Pollution to Solution (2025)',
      type: 'Research',
      link: 'https://www.unep.org/resources/pollution-solution-global-assessment-marine-litter-and-plastic-pollution',
      description: 'Comprehensive global assessment of marine plastic pollution and actionable solutions.',
    },
    {
      title: 'EPA Microplastics Research (2025 Update)',
      type: 'Research',
      link: 'https://www.epa.gov/research',
      description: 'Latest U.S. environmental research on microplastic impacts and mitigation strategies.',
    },
    {
      title: 'Stanford Brain Microplastics Study (2024)',
      type: 'Research',
      link: 'https://www.stanford.edu',
      description: 'Breakthrough research revealing 50% increase in brain microplastic concentrations since 2016.',
    },
    {
      title: 'UNM Cardiovascular Impact Study',
      type: 'Research',
      link: 'https://www.unm.edu',
      description: 'Study linking arterial microplastics to 4.5x higher risk of cardiovascular events.',
    },
    {
      title: 'The Story of Plastic (Documentary)',
      type: 'Media',
      link: 'https://www.storyofplastic.org/',
      description: 'Award-winning documentary exposing the plastic pollution crisis and corporate responsibility.',
    },
    {
      title: 'Plastic Pollution Coalition',
      type: 'Organization',
      link: 'https://www.plasticpollutioncoalition.org/',
      description: 'Global alliance working toward a world free of plastic pollution.',
    },
  ];

  const blogs = [
    {
      title: 'New Enzyme Breakthroughs in Plastic Degradation',
      date: 'January 2025',
      excerpt: 'Scientists discover bacteria that can break down PET plastics in weeks instead of centuries. What does this mean for cleanup efforts?',
    },
    {
      title: 'EU Passes Sweeping Single-Use Plastic Ban',
      date: 'December 2024',
      excerpt: 'European Union implements comprehensive ban on single-use plastics, setting global precedent for policy action.',
    },
    {
      title: 'Microplastics Found in Human Placenta: What Parents Need to Know',
      date: 'November 2024',
      excerpt: 'Recent study finds microplastics in every placenta tested. Experts weigh in on prenatal health implications.',
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    submissions.push({ ...contactForm, date: new Date().toISOString() });
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    alert('Thank you for sharing your story! We will review your submission.');
    setContactForm({ name: '', email: '', story: '' });
  };

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <h1 className="page-title">Resources & Research</h1>
          <p className="page-subtitle">
            Access the latest scientific research, news, and tools to deepen your understanding of 
            the microplastics crisis.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="section search-section">
        <div className="container">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search resources, reports, studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Curated Links */}
      <section className="section resources-section">
        <div className="container">
          <h2 className="section-title">Curated Research & Reports</h2>
          <div className="resources-grid">
            {filteredResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <div className="resource-header">
                  <BookOpen className="resource-icon" size={32} />
                  <span className="resource-type">{resource.type}</span>
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-link">
                  Visit Resource <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
          {filteredResources.length === 0 && (
            <p className="no-results">No resources found matching your search.</p>
          )}
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="section blog-section">
        <div className="container">
          <h2 className="section-title">Latest News & Insights</h2>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <Newspaper className="blog-icon" size={40} />
                <div className="blog-date">{blog.date}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Story Form */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-content">
              <h2 className="section-title">Share Your Story</h2>
              <p>
                Have a personal experience with microplastics? Spotted pollution in your community? 
                We want to hear from you. Your story can inspire others to take action.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Your Story</label>
                <textarea
                  value={contactForm.story}
                  onChange={(e) => setContactForm({ ...contactForm, story: e.target.value })}
                  placeholder="Tell us about your experience, observations, or ideas..."
                  rows="6"
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                <Send size={20} />
                Submit Story
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
