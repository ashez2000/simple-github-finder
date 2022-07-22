import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="max-w-6xl mx-auto px-3 mb-3">
      <nav className="h-14 flex justify-between items-center">
        <Link className="font-bold text-xl" to="/">
          Github Finder
        </Link>
        <Link className="text-xl" to="/about">
          About
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
