import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UserPage from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <main style={{ minHeight: '80vh' }} className="container mb-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user/:login" element={<UserPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
