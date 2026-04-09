import { useState } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import { Activity, Layout } from 'lucide-react';

const Dashboard = ({ workouts, onAdd, onDelete, onUpdate }) => {
  const [editingWorkout, setEditingWorkout] = useState(null);

  const handleEdit = (workout) => {
    setEditingWorkout(workout);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (data) => {
    if (editingWorkout) {
      onUpdate({ ...data, id: editingWorkout.id });
      setEditingWorkout(null);
    } else {
      onAdd(data);
    }
  };

  return (
    <div className="container fade-in" style={{ padding: '3rem 1rem' }}>
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={32} color="var(--primary)" />
          <h1 style={styles.title}>Your Fitness Dashboard</h1>
        </div>
        <p style={styles.subtitle}>Manage your activities and keep track of your progress.</p>
      </div>

      <div style={styles.mainGrid}>
        <div className="scale-in stagger-1" style={styles.formContainer}>
          <WorkoutForm onSubmit={handleFormSubmit} editData={editingWorkout} />
        </div>
        <div className="scale-in stagger-2" style={styles.listContainer}>
          <div style={styles.listHeader}>
             <Layout size={20} />
             <h2>Workout History</h2>
          </div>
          <WorkoutList workouts={workouts} onDelete={onDelete} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-light)',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.7,
    marginTop: '0.5rem',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 2fr',
    gap: '4rem',
    alignItems: 'start',
  },
  listHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '0.75rem',
  },
  '@media (max-width: 1024px)': {
    mainGrid: {
      gridTemplateColumns: '1fr',
    }
  }
};

export default Dashboard;
