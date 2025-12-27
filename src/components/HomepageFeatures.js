import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Personalized Learning',
    icon: '🎓',
    description: (
      <>
        Adjust content based on your background (Beginner, CS/AI, or Robotics/Engineering) 
        for an optimized learning experience.
      </>
    ),
    link: '/personalize',
  },
  {
    title: 'AI-Powered Chatbot',
    icon: '🤖',
    description: (
      <>
        Ask questions and get answers grounded in the textbook content with proper citations.
        Our RAG system ensures responses are accurate and relevant.
      </>
    ),
    link: '/chat',
  },
  {
    title: 'Urdu Translation',
    icon: '🇵🇰',
    description: (
      <>
        One-click translation to Urdu for better comprehension. Content structure and headings 
        are preserved for an optimal reading experience.
      </>
    ),
    link: '/urdu',
  },
  {
    title: 'Auto-Generated Content',
    icon: '⚡',
    description: (
      <>
        Each chapter includes TL;DR summaries (≤5 bullets), 3 multiple-choice questions, 
        and 1 reflection question to reinforce learning.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Mobile Optimized',
    icon: '📱',
    description: (
      <>
        Fully responsive design that works seamlessly on mobile devices, tablets, and desktops.
        Read and interact with content anywhere.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Fast & Efficient',
    icon: '⚡',
    description: (
      <>
        Entire textbook designed for quick consumption - under 45 minutes total reading time 
        with each chapter taking no more than 7 minutes.
      </>
    ),
    link: '/docs/intro',
  },
];

function Feature({icon, title, description, link}) {
  return (
    <Link to={link} className="col col--4 margin-bottom--lg">
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center margin-bottom--lg">Key Features of the Physical AI Textbook</h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}