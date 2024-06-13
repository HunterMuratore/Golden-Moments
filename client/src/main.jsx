import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-toastify/dist/ReactToastify.css";
import './index.scss'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Need basename basename='/goldenmoments' before building and copying to huntermuratore.com/goldenmoments */}
    {/* Don't need basename before building and copying to goldenmomentsnj.com */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
