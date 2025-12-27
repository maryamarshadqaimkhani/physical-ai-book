import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Chatbot from '../components/Chatbot';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/physical-ai-intro">
            Start Learning Physical AI 🤖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics - AI-Native Living Book Platform powered by Docusaurus and FastAPI RAG">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>Physical AI Fundamentals</h3>
                  <p>Learn the principles of AI systems that function in physical reality and comprehend physical laws.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>Humanoid Robotics</h3>
                  <p>Master ROS 2, simulation environments, and NVIDIA Isaac for developing humanoid robots.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>Vision-Language-Action</h3>
                  <p>Explore the convergence of LLMs and robotics for natural human-robot interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Course Overview</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              This capstone course introduces Physical AI—AI systems that function in reality and comprehend physical laws.
              Students learn to design, simulate, and deploy humanoid robots capable of natural human interactions
              using ROS 2, Gazebo, and NVIDIA Isaac.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/physical-ai-intro">
                Begin Your Journey
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Chatbot />
    </Layout>
  );
                }
