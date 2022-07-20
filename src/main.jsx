import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import './styles/bootstrap.min.css'
import './styles/main.css'

import { GithubProvider } from './context/github/GithubContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubProvider>
        <App />
      </GithubProvider>
    </BrowserRouter>
  </React.StrictMode>
)
