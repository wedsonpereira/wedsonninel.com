import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
function Auth0ProviderWithNavigate() {
    const navigate = useNavigate();

    return (
        <Auth0Provider
            domain="dev-asg2offl2b1cqk2l.jp.auth0.com"
            clientId="A7vrrNfhAIqUnmCfw6TOLO0NkSPviqxG"
            authorizationParams={{redirect_uri: window.location.origin}}
            onRedirectCallback={(appState) => {
                navigate(appState?.returnTo ?? "/dashboard", {replace: true});
            }}
        >
            <App/>
        </Auth0Provider>
    );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Auth0ProviderWithNavigate/>
      </BrowserRouter>
  </StrictMode>,
)
