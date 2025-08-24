import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import SecureApiButton from './SecureApiButton';
import './App.css';

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '2em auto',
        padding: '2em',
        border: '1px solid #eee',
        borderRadius: 8,
      }}
    >
      <h1>Auth0 Login Study</h1>
      <p>
        This demo uses{' '}
        <a
          href="https://auth0.com/docs/secure"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auth0
        </a>{' '}
        for secure authentication.
        <br />
        <strong>Best practices:</strong>
        <ul>
          <li>
            <b>
              Use <code>cacheLocation="memory"</code> and{' '}
              <code>useRefreshTokens&#123;false&#125;</code> for highest
              security.
            </b>
          </li>
          <li>Always use HTTPS in production.</li>
          <li>
            Set up proper{' '}
            <a
              href="https://auth0.com/docs/secure/tokens/token-best-practices"
              target="_blank"
              rel="noopener noreferrer"
            >
              token management
            </a>
            .
          </li>
          <li>Use strong password policies and MFA in Auth0 dashboard.</li>
          <li>
            Never store tokens in <code>localStorage</code> or cookies in SPAs.
          </li>
          <li>
            Use <code>getAccessTokenSilently()</code> to fetch tokens in memory
            for secure API calls.
          </li>
        </ul>
      </p>
      <LoginButton />
      {isAuthenticated && (
        <>
          <div
            style={{
              marginTop: '2em',
              background: '#f6fff6',
              padding: '1em',
              borderRadius: 6,
            }}
          >
            <h2>Welcome, {user?.name}!</h2>
            <p>
              You are securely logged in.
            </p>
          </div>
          {/* Secure API call demo */}
          <div style={{ marginTop: '1em' }}>
            <p>
              <b>
                Click below to get a secure access token (in memory) and call a
                protected API:
              </b>
            </p>
            <SecureApiButton />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
