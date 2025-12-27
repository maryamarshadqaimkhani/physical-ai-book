import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './styles.module.css';

export default function SignIn() {
  const { siteConfig } = useDocusaurusContext();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // In a real app, you would send this data to your backend for authentication
    // For now, we'll simulate a successful login with mock data
    const userData = {
      id: Date.now(), // In a real app, this would come from your backend
      name: 'John Doe', // In a real app, this would come from your backend
      email: formData.email,
      avatar: 'https://via.placeholder.com/150',
      bio: 'AI enthusiast and robotics researcher',
      joinedDate: 'January 2024',
      learningGoals: ['Complete all chapters', 'Build a humanoid robot', 'Contribute to open source'],
      achievements: [
        { id: 1, title: 'Chapter 1 Completed', date: '2024-02-15' },
        { id: 2, title: 'Quiz Master', date: '2024-03-01' },
        { id: 3, title: 'Community Helper', date: '2024-03-10' }
      ]
    };

    // Log the user in
    login(userData);

    // Redirect to profile page after successful sign in
    window.location.href = '/profile';
  };

  return (
    <Layout
      title={`Sign In - ${siteConfig.title}`}
      description="Sign in to your Physical AI textbook account">
      <main className={styles.authPage}>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className={clsx(styles.authCard, styles.authCardElevated)}>
                <div className={styles.authHeader}>
                  <h1 className={styles.authTitle}>Sign In</h1>
                  <p className={styles.authSubtitle}>Access your personalized learning experience</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.authForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={clsx(styles.formInput, styles.formInputEnhanced, errors.email && styles.formInputError)}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.formLabel}>Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={clsx(styles.formInput, styles.formInputEnhanced, errors.password && styles.formInputError)}
                      placeholder="Enter your password"
                    />
                    {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.checkboxContainer}>
                      <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className={clsx(styles.checkboxInput, styles.checkboxInputEnhanced)}
                      />
                      <label htmlFor="remember" className={styles.checkboxLabel}>Remember me</label>
                    </div>

                    <Link to="#" className={styles.forgotPassword}>Forgot password?</Link>
                  </div>

                  <button type="submit" className={clsx(styles.authButton, styles.authButtonPrimary)}>
                    Sign In
                  </button>

                  <div className={styles.authFooter}>
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                  </div>
                </form>

                <div className={styles.divider}>
                  <span className={styles.dividerText}>OR</span>
                </div>

                <div className={styles.socialAuth}>
                  <button className={clsx(styles.socialButton, styles.googleButton)}>
                    <span className={styles.socialIcon}>🔍</span>
                    Sign in with Google
                  </button>
                  <button className={clsx(styles.socialButton, styles.githubButton)}>
                    <span className={styles.socialIcon}>🐱</span>
                    Sign in with GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}