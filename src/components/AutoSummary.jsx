import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AutoSummary = ({ chapterTitle }) => {
  // Sample summaries for each chapter
  const summaries = {
    'Introduction to Physical AI & Humanoid Robotics': [
      'Physical AI combines artificial intelligence with physical interaction capabilities',
      'This textbook covers essential concepts in 6-8 short chapters',
      'Features include personalization, AI chatbot, and Urdu translation',
      'Designed for quick consumption - under 45 minutes total reading time',
      'Focuses on intuitive explanations rather than complex equations'
    ],
    'What Is Physical AI?': [
      'Physical AI represents a shift to AI systems that interact with the physical world',
      'Key characteristics include embodiment, real-time processing, and uncertainty management',
      'Essential for robotics, autonomous vehicles, healthcare, and exploration',
      'Foundation for creating humanoid robots that can assist humans',
      'Requires understanding of both physics and AI'
    ],
    'Sensing the Physical World': [
      'Robots use multiple sensor types: vision, tactile, and proprioceptive',
      'Sensor fusion combines data from multiple sensors for better perception',
      'Challenges include noise, real-time processing, and calibration',
      'Applications range from household robots to autonomous vehicles',
      'Critical for safe and effective robot-environment interaction'
    ],
    'Actuation & Motion': [
      'Actuators are the "muscles" of robots, converting energy to movement',
      'Types include electric, hydraulic, pneumatic, and emerging technologies',
      'Control methods include position, force, and impedance control',
      'Challenges involve efficiency, safety, and heat management',
      'Biomimetic designs inspire more natural robot movement'
    ],
    'Control vs Learning': [
      'Control systems offer predictability and safety but require accurate models',
      'Learning systems provide adaptability but may lack safety guarantees',
      'Hybrid approaches combine strengths of both methods',
      'Choice depends on safety requirements, complexity, and environment',
      'Future trends include learning-based control theory'
    ],
    'Robot Learning': [
      'Types include reinforcement learning, imitation learning, and self-supervised learning',
      'Challenges include reality gap, safety, and sample efficiency',
      'Applications span manipulation, locomotion, and human-robot interaction',
      'Simulation-to-reality transfer helps overcome real-world training challenges',
      'Future includes foundation models and learning from human feedback'
    ],
    'Humanoid Architectures': [
      'Humanoid robots mimic human form with torso, head, arms, and legs',
      'Key components include actuation, sensory, and control systems',
      'Design challenges involve balance, power management, and safety',
      'Applications include healthcare, education, customer service, and research',
      'Future trends include biomimetic approaches and modular design'
    ],
    'Future & Ethics of Physical AI': [
      'Future includes advanced human-robot collaboration and enhanced capabilities',
      'Ethical considerations involve safety, privacy, social impact, and human dignity',
      'Regulatory frameworks needed for safety standards and liability',
      'Economic implications include new industries and workforce transformation',
      'Success requires human-centered design and value alignment'
    ],
    'Conclusion': [
      'Physical AI represents a paradigm shift to machines interacting with the physical world',
      'Key components are sensing, actuation, and balanced control/learning approaches',
      'Humanoid design presents unique challenges and advantages',
      'Ethical considerations are crucial as technology becomes more prevalent',
      'Future depends on responsible development and human-centered design'
    ]
  };

  const summaryPoints = summaries[chapterTitle] || summaries['Introduction to Physical AI & Humanoid Robotics'];

  return (
    <BrowserOnly>
      {() => (
        <div className="auto-summary">
          <style jsx>{`
            .auto-summary {
              margin: 20px 0;
              padding: 15px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: #f0f8ff;
            }
            .summary-title {
              font-weight: bold;
              margin-bottom: 10px;
              color: #1a73e8;
            }
            .summary-list {
              list-style-type: disc;
              padding-left: 20px;
            }
            .summary-item {
              margin: 5px 0;
            }
          `}</style>
          <div className="summary-title">TL;DR Summary</div>
          <ul className="summary-list">
            {summaryPoints.map((point, index) => (
              <li key={index} className="summary-item">{point}</li>
            ))}
          </ul>
        </div>
      )}
    </BrowserOnly>
  );
};

export default AutoSummary;