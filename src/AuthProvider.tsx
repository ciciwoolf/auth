import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './authConfig';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams={{
      redirect_uri: auth0Config.redirectUri,
      audience: auth0Config.audience,
    }}
    cacheLocation="memory" // Highest security: tokens only in memory
    useRefreshTokens={false} // Do not use refresh tokens in SPA
  >
    {children}
  </Auth0Provider>
);
