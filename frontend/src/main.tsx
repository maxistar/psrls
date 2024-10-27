import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <TonConnectUIProvider manifestUrl="https://projects.maxistar.me/psrls/tonconnect-manifest.json">
         <App />
      </TonConnectUIProvider>
  </StrictMode>,
)
