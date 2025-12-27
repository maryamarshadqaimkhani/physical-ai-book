import React, { useEffect } from 'react';
import { useAuth } from '@site/src/contexts/AuthContext';

export default function DashboardRedirect() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Redirect to profile page if user is logged in
      window.location.href = '/profile';
    } else {
      // Redirect to sign in page if user is not logged in
      window.location.href = '/signin';
    }
  }, [user]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}