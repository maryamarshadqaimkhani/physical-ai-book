import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './styles.module.css';

export default function Profile() {
  const { siteConfig } = useDocusaurusContext();
  const { user, logout } = useAuth();
  const [localUser, setLocalUser] = useState(user || {
    name: 'Guest User',
    email: '',
    avatar: 'https://via.placeholder.com/150',
    bio: 'AI enthusiast and robotics researcher',
    joinedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    learningGoals: ['Complete all chapters', 'Build a humanoid robot', 'Contribute to open source'],
    achievements: [
      { id: 1, title: 'Welcome to Physical AI', date: new Date().toISOString().split('T')[0] }
    ]
  });
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    if (user) {
      setLocalUser(user);
    }
  }, [user]);

  const handleSaveProfile = () => {
    // Update the user in the auth context
    // In a real app, you would send this data to your backend
    console.log('Profile updated:', localUser);
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  if (!user) {
    // Redirect to sign in page if user is not authenticated
    React.useEffect(() => {
      window.location.href = '/signin';
    }, []);

    return null; // Don't render anything since we're redirecting
  }

  return (
    <Layout
      title={`Profile - ${siteConfig.title}`}
      description="Your profile for the Physical AI textbook">
      <main className={styles.profilePage}>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--3">
              <div className={styles.profileSidebar}>
                <div className={clsx(styles.profileCard, styles.profileCardElevated)}>
                  <div className={styles.avatarContainer}>
                    <img
                      src={localUser.avatar}
                      alt="User Avatar"
                      className={styles.avatar}
                    />
                    <div className={styles.avatarOverlay}>
                      <span className={styles.editIcon}>✏️</span>
                    </div>
                  </div>
                  <h3 className={styles.profileName}>{localUser.name}</h3>
                  <p className={styles.profileEmail}>{localUser.email}</p>
                  <p className={styles.profileBio}>{localUser.bio}</p>

                  <div className={styles.profileStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>6</span>
                      <span className={styles.statLabel}>Chapters</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>12</span>
                      <span className={styles.statLabel}>Quizzes</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>3</span>
                      <span className={styles.statLabel}>Badges</span>
                    </div>
                  </div>
                </div>

                <div className={styles.navContainer}>
                  <button
                    className={clsx(styles.navButton, activeTab === 'profile' && styles.navButtonActive)}
                    onClick={() => setActiveTab('profile')}
                  >
                    <span className={styles.navIcon}>👤</span> Profile
                  </button>
                  <button
                    className={clsx(styles.navButton, activeTab === 'settings' && styles.navButtonActive)}
                    onClick={() => setActiveTab('settings')}
                  >
                    <span className={styles.navIcon}>⚙️</span> Settings
                  </button>
                  <button
                    className={clsx(styles.navButton, activeTab === 'achievements' && styles.navButtonActive)}
                    onClick={() => setActiveTab('achievements')}
                  >
                    <span className={styles.navIcon}>🏆</span> Achievements
                  </button>
                  <button
                    className={clsx(styles.navButton, activeTab === 'learning' && styles.navButtonActive)}
                    onClick={() => setActiveTab('learning')}
                  >
                    <span className={styles.navIcon}>🎯</span> Learning Goals
                  </button>
                  <button
                    className={clsx(styles.navButton, styles.navButtonLogout)}
                    onClick={handleLogout}
                  >
                    <span className={styles.navIcon}>🚪</span> Sign Out
                  </button>
                </div>
              </div>
            </div>

            <div className="col col--9">
              <div className={clsx(styles.profileContent, styles.profileContentElevated)}>
                {activeTab === 'profile' && (
                  <div className={styles.tabContent}>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.sectionTitle}>Profile Information</h2>
                      <p className={styles.sectionSubtitle}>Update your personal information</p>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={localUser.name}
                        onChange={(e) => setLocalUser({...localUser, name: e.target.value})}
                        className={clsx(styles.formInput, styles.formInputEnhanced)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={localUser.email}
                        onChange={(e) => setLocalUser({...localUser, email: e.target.value})}
                        className={clsx(styles.formInput, styles.formInputEnhanced)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="bio" className={styles.formLabel}>Bio</label>
                      <textarea
                        id="bio"
                        value={localUser.bio}
                        onChange={(e) => setLocalUser({...localUser, bio: e.target.value})}
                        className={clsx(styles.formInput, styles.formInputEnhanced)}
                        rows="3"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Member Since</label>
                      <p className={styles.formText}>{localUser.joinedDate}</p>
                    </div>

                    <button onClick={handleSaveProfile} className={clsx(styles.authButton, styles.authButtonPrimary)}>
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className={styles.tabContent}>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.sectionTitle}>Account Settings</h2>
                      <p className={styles.sectionSubtitle}>Manage your account preferences</p>
                    </div>
                    <div className={styles.settingsGroup}>
                      <h3 className={styles.settingsGroupTitle}>Privacy Settings</h3>
                      <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="profilePublic" defaultChecked className={styles.checkboxInputEnhanced} />
                        <label htmlFor="profilePublic" className={styles.checkboxLabel}>Make profile public</label>
                      </div>
                      <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="emailNotifications" defaultChecked className={styles.checkboxInputEnhanced} />
                        <label htmlFor="emailNotifications" className={styles.checkboxLabel}>Receive email notifications</label>
                      </div>
                      <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="shareProgress" className={styles.checkboxInputEnhanced} />
                        <label htmlFor="shareProgress" className={styles.checkboxLabel}>Share learning progress</label>
                      </div>
                    </div>

                    <div className={styles.settingsGroup}>
                      <h3 className={styles.settingsGroupTitle}>Learning Preferences</h3>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Learning Mode</label>
                        <select className={clsx(styles.formInput, styles.formInputEnhanced)}>
                          <option>Standard</option>
                          <option>Beginner</option>
                          <option>Advanced</option>
                        </select>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Language Preference</label>
                        <select className={clsx(styles.formInput, styles.formInputEnhanced)}>
                          <option>English</option>
                          <option>Urdu</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                    </div>

                    <button className={clsx(styles.authButton, styles.dangerButton, styles.authButtonDanger)}>
                      Delete Account
                    </button>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className={styles.tabContent}>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.sectionTitle}>Achievements</h2>
                      <p className={styles.sectionSubtitle}>Your learning milestones and accomplishments</p>
                    </div>
                    <div className={styles.achievementsGrid}>
                      {localUser.achievements.map(achievement => (
                        <div key={achievement.id} className={clsx(styles.achievementCard, styles.achievementCardEnhanced)}>
                          <div className={styles.achievementIcon}>🏆</div>
                          <div className={styles.achievementContent}>
                            <h3>{achievement.title}</h3>
                            <p>{achievement.date}</p>
                          </div>
                        </div>
                      ))}

                      <div className={clsx(styles.achievementCard, styles.achievementCardEnhanced)}>
                        <div className={styles.achievementIcon}>📚</div>
                        <div className={styles.achievementContent}>
                          <h3>Chapter 2 Completed</h3>
                          <p>In Progress</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'learning' && (
                  <div className={styles.tabContent}>
                    <div className={styles.sectionHeader}>
                      <h2 className={styles.sectionTitle}>Learning Goals</h2>
                      <p className={styles.sectionSubtitle}>Track your educational objectives</p>
                    </div>
                    <div className={styles.goalsList}>
                      {localUser.learningGoals.map((goal, index) => (
                        <div key={index} className={styles.goalItem}>
                          <div className={styles.goalCheckbox}>
                            <input type="checkbox" id={`goal-${index}`} className={styles.checkboxInputEnhanced} />
                            <label htmlFor={`goal-${index}`} className={styles.checkboxLabel}>{goal}</label>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="newGoal" className={styles.formLabel}>Add New Goal</label>
                      <div className={styles.inputWithButton}>
                        <input
                          type="text"
                          id="newGoal"
                          placeholder="Add a new learning goal"
                          className={clsx(styles.formInput, styles.formInputEnhanced)}
                        />
                        <button className={clsx(styles.smallButton, styles.smallButtonPrimary)}>Add</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}