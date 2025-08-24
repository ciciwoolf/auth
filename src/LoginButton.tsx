import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated)
    return <div>Welcome, {user?.name}! You are logged in.</div>;

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{ padding: '1em', fontSize: '1em' }}
    >
      Log in securely
    </button>
  );
};

export default LoginButton;
