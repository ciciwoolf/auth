// src/authConfig.ts
export const auth0Config = {
  domain: 'YOUR_AUTH0_DOMAIN', // Replace with your Auth0 domain
  clientId: 'YOUR_AUTH0_CLIENT_ID', // Replace with your Auth0 client ID
  audience: 'YOUR_AUTH0_API_AUDIENCE', // Optional: for API access
  redirectUri: window.location.origin,
};
