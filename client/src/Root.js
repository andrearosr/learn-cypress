import React from 'react';
import GlobalStateProvider from './store/GlobalStateProvider';
import App from './App';

function Root() {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
}

export default Root;