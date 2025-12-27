import React from 'react';
import Navbar from '@theme-original/Navbar';
import { useAuth } from '@site/src/contexts/AuthContext';
import Link from '@docusaurus/Link';

export default function NavbarWrapper(props) {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <>
      <Navbar 
        {...props} 
        items={[
          ...props.items,
          ...(user 
            ? [
                {
                  label: `Hi, ${user.name}`,
                  to: '/profile',
                  position: 'right',
                },
                {
                  label: 'Sign Out',
                  to: '#',
                  position: 'right',
                  onClick: (e) => {
                    e.preventDefault();
                    handleLogout();
                  }
                }
              ]
            : [
                {
                  label: 'Sign Up',
                  to: '/signup',
                  position: 'right',
                },
                {
                  label: 'Sign In',
                  to: '/signin',
                  position: 'right',
                }
              ]
          )
        ]} 
      />
    </>
  );
}