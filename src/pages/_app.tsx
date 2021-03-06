import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengeContext';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
    
  )
}

export default MyApp
