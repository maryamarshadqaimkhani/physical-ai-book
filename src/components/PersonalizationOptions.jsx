import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const PersonalizationOptions = () => {
  const [background, setBackground] = useState('beginner');
  const [showPersonalizedContent, setShowPersonalizedContent] = useState(false);

  // Load user's preference from localStorage on component mount
  useEffect(() => {
    const savedBackground = localStorage.getItem('userBackground');
    if (savedBackground) {
      setBackground(savedBackground);
    }
  }, []);

  // Save user's preference to localStorage
  const handleBackgroundChange = (event) => {
    const selectedBackground = event.target.value;
    setBackground(selectedBackground);
    localStorage.setItem('userBackground', selectedBackground);
    setShowPersonalizedContent(true);
  };

  return (
    <BrowserOnly>
      {() => (
        <div className="personalization-options">
          <style jsx>{`
            .personalization-options {
              margin: 20px 0;
              padding: 15px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: #f9f9f9;
            }
            .personalization-title {
              font-weight: bold;
              margin-bottom: 10px;
            }
            .background-options {
              display: flex;
              gap: 15px;
              flex-wrap: wrap;
            }
            .background-option {
              display: flex;
              align-items: center;
              gap: 5px;
            }
            .show-content-btn {
              margin-top: 10px;
              padding: 8px 15px;
              background-color: #4285f4;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .show-content-btn:hover {
              background-color: #3367d6;
            }
          `}</style>
          <div className="personalization-title">Select Your Background:</div>
          <div className="background-options">
            <label className="background-option">
              <input
                type="radio"
                name="background"
                value="beginner"
                checked={background === 'beginner'}
                onChange={handleBackgroundChange}
              />
              Beginner/Non-technical
            </label>
            <label className="background-option">
              <input
                type="radio"
                name="background"
                value="cs-ai"
                checked={background === 'cs-ai'}
                onChange={handleBackgroundChange}
              />
              CS/AI
            </label>
            <label className="background-option">
              <input
                type="radio"
                name="background"
                value="robotics"
                checked={background === 'robotics'}
                onChange={handleBackgroundChange}
              />
              Robotics/Engineering
            </label>
          </div>
          {showPersonalizedContent && (
            <div className="personalized-content">
              <p>Content has been personalized for your background: <strong>{background === 'beginner' ? 'Beginner/Non-technical' : background === 'cs-ai' ? 'CS/AI' : 'Robotics/Engineering'}</strong></p>
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default PersonalizationOptions;