import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SecureApiButton: React.FC = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const callApi = async () => {
    try {
      // This gets a fresh access token from Auth0, in memory only
      const token = await getAccessTokenSilently();
      // Use the token for a secure API call
      alert('Access token (in memory): ' + token);
      // Example: fetch('/api/secure', { headers: { Authorization: `Bearer ${token}` } })
    } catch (e) {
      alert('Failed to get token: ' + (e as Error).message);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <button onClick={callApi} style={{ marginTop: '1em' }}>
      Get Secure Token & Call API
    </button>
  );
};

export default SecureApiButton;
