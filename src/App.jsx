import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      id: Date.now().toString(),
    };
    setWorkouts([newWorkout, ...workouts]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const updateWorkout = (updatedWorkout) => {
    setWorkouts(workouts.map(w => w.id === updatedWorkout.id ? updatedWorkout : w));
  };

  return (
    <Router>
      <div className="app-wrapper" style={styles.wrapper}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home workouts={workouts} />} />
            <Route 
              path="/dashboard" 
              element={
                <Dashboard 
                  workouts={workouts} 
                  onAdd={addWorkout} 
                  onDelete={deleteWorkout} 
                  onUpdate={updateWorkout} 
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  }
};

export default App;
