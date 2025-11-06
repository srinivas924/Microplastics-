import React, { useState } from 'react';
import { Calculator, Heart, Users, Building, Award } from 'lucide-react';
import './EthicsSolutions.css';

const EthicsSolutions = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showPledge, setShowPledge] = useState(false);
  const [calculatorAnswers, setCalculatorAnswers] = useState({});
  const [pledgeData, setPledgeData] = useState({ name: '', commitment: '' });
  const [score, setScore] = useState(null);

  const calculatorQuestions = [
    { id: 'bottles', question: 'Single-use plastic bottles per week?', options: ['0', '1-3', '4-7', '8+'], scores: [0, 2, 5, 10] },
    { id: 'bags', question: 'Plastic bags used weekly?', options: ['0 (reusable)', '1-5', '6-10', '10+'], scores: [0, 3, 6, 12] },
    { id: 'takeout', question: 'Plastic takeout containers weekly?', options: ['0', '1-2', '3-5', '6+'], scores: [0, 2, 4, 8] },
    { id: 'laundry', question: 'Do you use a laundry microfiber filter?', options: ['Yes', 'No'], scores: [0, 15] },
    { id: 'cosmetics', question: 'Personal care products with microbeads?', options: ['None', 'Some', 'Many'], scores: [0, 5, 10] },
  ];

  const handleCalculatorChange = (questionId, optionIndex, score) => {
    setCalculatorAnswers({ ...calculatorAnswers, [questionId]: score });
  };

  const calculateScore = () => {
    const total = Object.values(calculatorAnswers).reduce((sum, val) => sum + val, 0);
    setScore(total);
    localStorage.setItem('plastic_footprint_score', total);
    localStorage.setItem('plastic_footprint_date', new Date().toISOString());
  };

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    const pledges = JSON.parse(localStorage.getItem('pledges') || '[]');
    const newPledge = {
      ...pledgeData,
      date: new Date().toISOString(),
      id: Date.now(),
    };
    pledges.push(newPledge);
    localStorage.setItem('pledges', JSON.stringify(pledges));
    alert(`Thank you, ${pledgeData.name}! Your pledge has been recorded.`);
    setPledgeData({ name: '', commitment: '' });
    setShowPledge(false);
  };

  const getScoreMessage = (score) => {
    if (score <= 10) return { text: 'Excellent! You have a low plastic footprint.', color: '#2ecc71', tips: ['Keep up the great work!', 'Share your habits with others', 'Consider activism or advocacy'] };
    if (score <= 25) return { text: 'Good, but room for improvement.', color: '#f39c12', tips: ['Switch to reusable water bottles', 'Bring your own bags shopping', 'Choose products with minimal packaging'] };
    if (score <= 40) return { text: 'Moderate plastic use. Time to make changes.', color: '#e67e22', tips: ['Install a microfiber laundry filter', 'Avoid single-use plastics', 'Choose glass/metal containers', 'Check cosmetics for microbeads'] };
    return { text: 'High plastic footprint. Urgent action needed.', color: '#e74c3c', tips: ['Start with ONE change this week', 'Replace plastic water bottles immediately', 'Audit your bathroom for microplastics', 'Join a zero-waste community for support'] };
  };

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="container">
          <h1 className="page-title">Ethics & Solutions</h1>
          <p className="page-subtitle">
            From corporate accountability to personal action—explore the ethical questions and practical 
            steps we can take to combat the microplastics crisis.
          </p>
        </div>
      </section>

      {/* Dual Column Layout */}
      <section className="section dual-section">
        <div className="container">
          <div className="dual-grid">
            {/* Left: Ethics */}
            <div className="ethics-column">
              <h2 className="column-title">The Ethical Questions</h2>
              
              <div className="ethics-card">
                <div className="ethics-icon">
                  <Building size={40} />
                </div>
                <h3>Corporate Accountability</h3>
                <p>
                  Fossil fuel and plastic companies have known about environmental impacts for decades, 
                  yet continue prioritizing profits. Should they be held financially and legally responsible 
                  for cleanup, health costs, and research?
                </p>
                <div className="ethics-stat">$300B+ annual plastic industry revenue</div>
              </div>

              <div className="ethics-card">
                <div className="ethics-icon">
                  <Users size={40} />
                </div>
                <h3>Environmental Justice</h3>
                <p>
                  Low-income communities and developing nations face disproportionate exposure to plastic 
                  pollution, despite consuming the least. Wealthy nations export plastic waste, creating 
                  ethical inequities in who bears the burden.
                </p>
                <div className="ethics-stat">80% of ocean plastic from 20 countries</div>
              </div>

              <div className="ethics-card">
                <div className="ethics-icon">
                  <Heart size={40} />
                </div>
                <h3>Intergenerational Ethics</h3>
                <p>
                  Today's convenience creates tomorrow's crisis. Are we morally justified in leaving future 
                  generations with plastic-saturated oceans, contaminated soil, and health consequences we 
                  can't reverse?
                </p>
                <div className="ethics-stat">Plastics persist 400-1000 years</div>
              </div>
            </div>

            {/* Right: Solutions */}
            <div className="solutions-column">
              <h2 className="column-title">What You Can Do</h2>
              
              <div className="action-card">
                <h3>Individual Actions</h3>
                <ul className="action-list">
                  <li><strong>Laundry filters:</strong> Capture 90% of microfibers from synthetic clothing</li>
                  <li><strong>Reusable everything:</strong> Bottles, bags, containers, straws</li>
                  <li><strong>Product audits:</strong> Check for microbeads in cosmetics and toothpaste</li>
                  <li><strong>Natural fibers:</strong> Choose cotton, wool, linen over polyester</li>
                  <li><strong>Tire choices:</strong> Opt for lower-emission tires when replacing</li>
                </ul>
              </div>

              <div className="action-card">
                <h3>Policy & Advocacy</h3>
                <ul className="action-list">
                  <li><strong>Support bans:</strong> Advocate for single-use plastic legislation</li>
                  <li><strong>Extended producer responsibility:</strong> Make companies pay for waste</li>
                  <li><strong>Vote with your wallet:</strong> Boycott plastic-heavy brands</li>
                  <li><strong>Community cleanups:</strong> Join local environmental groups</li>
                  <li><strong>Educate others:</strong> Share this information widely</li>
                </ul>
              </div>

              <div className="interactive-cards">
                <button 
                  onClick={() => setShowCalculator(!showCalculator)} 
                  className="interactive-btn calculator-btn"
                >
                  <Calculator size={24} />
                  Calculate Your Footprint
                </button>
                <button 
                  onClick={() => setShowPledge(!showPledge)} 
                  className="interactive-btn pledge-btn"
                >
                  <Award size={24} />
                  Make a Pledge
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="modal-overlay" onClick={() => setShowCalculator(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Plastic Footprint Calculator</h2>
            <p className="modal-subtitle">Answer these questions to estimate your weekly plastic impact</p>
            
            <div className="calculator-form">
              {calculatorQuestions.map((q, index) => (
                <div key={q.id} className="calculator-question">
                  <label>{q.question}</label>
                  <div className="options-grid">
                    {q.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        className={`option-btn ${calculatorAnswers[q.id] === q.scores[optIndex] ? 'selected' : ''}`}
                        onClick={() => handleCalculatorChange(q.id, optIndex, q.scores[optIndex])}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              <button 
                onClick={calculateScore} 
                className="btn-primary"
                disabled={Object.keys(calculatorAnswers).length < calculatorQuestions.length}
              >
                Calculate My Score
              </button>
            </div>

            {score !== null && (
              <div className="score-result" style={{ borderColor: getScoreMessage(score).color }}>
                <h3 style={{ color: getScoreMessage(score).color }}>Your Score: {score}</h3>
                <p>{getScoreMessage(score).text}</p>
                <div className="tips-list">
                  <h4>Recommended Actions:</h4>
                  <ul>
                    {getScoreMessage(score).tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <button onClick={() => setShowCalculator(false)} className="modal-close">Close</button>
          </div>
        </div>
      )}

      {/* Pledge Modal */}
      {showPledge && (
        <div className="modal-overlay" onClick={() => setShowPledge(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Make Your Pledge</h2>
            <p className="modal-subtitle">Commit to reducing your plastic footprint</p>
            
            <form className="pledge-form" onSubmit={handlePledgeSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  value={pledgeData.name}
                  onChange={(e) => setPledgeData({ ...pledgeData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>I commit to:</label>
                <select
                  value={pledgeData.commitment}
                  onChange={(e) => setPledgeData({ ...pledgeData, commitment: e.target.value })}
                  required
                >
                  <option value="">Select a commitment</option>
                  <option value="reduce">Reduce single-use plastics by 50%</option>
                  <option value="reuse">Switch to reusable bottles and bags</option>
                  <option value="filter">Install a laundry microfiber filter</option>
                  <option value="advocate">Advocate for plastic policies</option>
                  <option value="educate">Educate 5 people about microplastics</option>
                  <option value="cleanup">Join monthly beach/community cleanups</option>
                </select>
              </div>
              
              <button type="submit" className="btn-primary">Submit Pledge</button>
            </form>

            <button onClick={() => setShowPledge(false)} className="modal-close">Close</button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <h2>Small Changes, Big Impact</h2>
            <p>
              You don't need to be perfect. Start with one change this week. Every reusable bottle, 
              every rejected plastic bag, every conversation about microplastics creates ripples of change.
            </p>
            <div className="cta-buttons">
              <a href="/resources" className="btn-primary">Find More Resources</a>
              <a href="/about" className="btn-secondary">Learn About This Campaign</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicsSolutions;
