import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import { useTheme } from './hooks/useTheme'

export type Page = 'home' | 'about' | 'privacy'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: string) => {
    setPage(p as Page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased dark:bg-neutral-950">
      <Navbar theme={theme} onToggle={toggleTheme} currentPage={page} onNavigate={navigate} />
      {page === 'home' && <Home theme={theme} onNavigate={navigate} />}
      {page === 'about' && <About />}
      {page === 'privacy' && <Privacy onNavigate={navigate} />}
    </div>
  )
}

export default App
