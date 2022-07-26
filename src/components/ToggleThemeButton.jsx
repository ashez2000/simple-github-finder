import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/theme/ThemeContext'

const Toggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="rounded-md p-1 bg-slate-200 dark:bg-dark-300">
      {theme === 'dark' ? (
        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-2xl cursor-pointer"
        >
          <HiMoon />
        </div>
      ) : (
        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-2xl cursor-pointer"
        >
          <HiSun />
        </div>
      )}
    </div>
  )
}

export default Toggle
