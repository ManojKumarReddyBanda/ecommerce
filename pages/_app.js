import "../styles/globalCSS.css"
import React from 'react';
import { AuthProvider } from '../authContext';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;



