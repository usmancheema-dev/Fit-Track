import { Code, Bird, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          <h3 style={{ color: 'var(--primary)' }}>FitTrack</h3>
          <p>Your journey to fitness begins here.</p>
        </div>
        <div style={styles.socials}>
          <a href="#" style={styles.icon} title="Github"><Code size={20} /></a>
          <a href="#" style={styles.icon} title="Twitter"><Bird size={20} /></a>
          <a href="#" style={styles.icon} title="Instagram"><Camera size={20} /></a>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} FitTrack. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--card-light)',
    borderTop: '1px solid var(--border-light)',
    padding: '3rem 0 1rem',
    marginTop: '4rem',
    transition: 'var(--transition)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  logo: {
    maxWidth: '300px',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    color: 'var(--text-light)',
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition)',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '1rem',
    borderTop: '1px solid var(--border-light)',
    fontSize: '0.875rem',
    color: 'var(--text-light)',
    opacity: 0.7,
  }
};

export default Footer;
