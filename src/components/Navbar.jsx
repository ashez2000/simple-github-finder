import { Link } from 'react-router-dom'
import Toggle from './ToggleThemeButton'

const Navbar = () => {
  return (
    <header className="max-w-6xl mx-auto px-3 mb-8">
      <div className="flex space-x-3 justify-between items-center px-3 mb-3 mt-8">
        <nav className="flex space-x-3">
          <NavLink path="/">Github Finder</NavLink>
          <NavLink path="/about">About</NavLink>
        </nav>
        <div className="flex">
          <Toggle />
        </div>
      </div>
    </header>
  )
}

const NavLink = ({ children, path }) => {
  return (
    <Link
      className="px-2 py-1 font-semibold bg-slate-200 dark:bg-dark-300 rounded-md"
      to={path}
    >
      {children}
    </Link>
  )
}

export default Navbar
