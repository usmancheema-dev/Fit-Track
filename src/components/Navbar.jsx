import { useState, useEffect } from 'react';
import { Sun, Moon, Dumbbell, LayoutDashboard, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>
          <Dumbbell size={28} color="var(--primary)" />
          <span>FitTrack</span>
        </Link>
        <div style={styles.links}>
          <Link 
            to="/" 
            style={{ 
              ...styles.link, 
              color: location.pathname === '/' ? 'var(--primary)' : 'var(--text-light)' 
            }}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link 
            to="/dashboard" 
            style={{ 
              ...styles.link, 
              color: location.pathname === '/dashboard' ? 'var(--primary)' : 'var(--text-light)' 
            }}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <button onClick={toggleTheme} style={styles.themeToggle}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '1rem 0',
    backgroundColor: 'var(--card-light)',
    borderBottom: '1px solid var(--border-light)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'var(--transition)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--text-light)',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'var(--transition)',
  },
  themeToggle: {
    background: 'none',
    padding: '0.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-light)',
  }
};

export default Navbar;
