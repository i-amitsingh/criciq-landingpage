import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white font-sans antialiased dark:bg-neutral-950">
      <Navbar theme={theme} onToggle={toggleTheme} />
      <Home />
    </div>
  )
}

export default App
