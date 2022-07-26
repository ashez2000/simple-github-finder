import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/main.css'

import { GithubProvider } from './context/github/GithubContext'
import { ThemeProvider } from './context/theme/ThemeContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GithubProvider>
          <App />
        </GithubProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
