// import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

// wrapping in <React.StrictMode> </React.StrictMode> causes double API call
// re-enable strict mode and run before build/deploy, will help with bug catching

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
