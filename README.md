# High Security Authentication Study (Auth0, React, Vite)

This project demonstrates best practices for high-security authentication in a React SPA using Auth0. It is designed for sensitive applications such as healthcare, where protecting user tokens is critical.

## Key Steps

- **Install React Auth0 SDK**
- **Create an AuthProvider component** and set props for security:
  - `cacheLocation` to `'memory'` (tokens stored only in memory)
  - `useRefreshTokens` to `false` (no refresh tokens in browser)
- **Use the Auth0 method `getAccessTokenSilently`** to securely fetch access tokens for API calls, leveraging the user's session (no refresh tokens exposed to the browser)
- **Wrap your app's root with AuthProvider** to enable authentication throughout your app
