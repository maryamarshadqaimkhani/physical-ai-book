import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './styles.module.css';

export default function SignUp() {
  const { siteConfig } = useDocusaurusContext();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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

    // In a real app, you would send this data to your backend
    // For now, we'll simulate a successful sign up
    const userData = {
      id: Date.now(), // In a real app, this would come from your backend
      name: formData.name,
      email: formData.email,
      avatar: 'https://via.placeholder.com/150',
      bio: 'AI enthusiast and robotics researcher',
      joinedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
      learningGoals: ['Complete all chapters', 'Build a humanoid robot', 'Contribute to open source'],
      achievements: [
        { id: 1, title: 'Welcome to Physical AI', date: new Date().toISOString().split('T')[0] }
      ]
    };

    // Log the user in automatically after sign up
    login(userData);

    // Redirect to profile page after successful sign up
    window.location.href = '/profile';
  };

  return (
    <Layout
      title={`Sign Up - ${siteConfig.title}`}
      description="Create your account for the Physical AI textbook">
      <main className={styles.authPage}>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className={clsx(styles.authCard, styles.authCardElevated)}>
                <div className={styles.authHeader}>
                  <h1 className={styles.authTitle}>Create Account</h1>
                  <p className={styles.authSubtitle}>Join our community of Physical AI learners</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.authForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={clsx(styles.formInput, styles.formInputEnhanced, errors.name && styles.formInputError)}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                  </div>

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
                      placeholder="Create a password"
                    />
                    {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.formLabel}>Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={clsx(styles.formInput, styles.formInputEnhanced, errors.confirmPassword && styles.formInputError)}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword}</p>}
                  </div>

                  <button type="submit" className={clsx(styles.authButton, styles.authButtonPrimary)}>
                    Sign Up
                  </button>

                  <div className={styles.authFooter}>
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                  </div>
                </form>

                <div className={styles.divider}>
                  <span className={styles.dividerText}>OR</span>
                </div>

                <div className={styles.socialAuth}>
                  <button className={clsx(styles.socialButton, styles.googleButton)}>
                    <span className={styles.socialIcon}>🔍</span>
                    Sign up with Google
                  </button>
                  <button className={clsx(styles.socialButton, styles.githubButton)}>
                    <span className={styles.socialIcon}>🐱</span>
                    Sign up with GitHub
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