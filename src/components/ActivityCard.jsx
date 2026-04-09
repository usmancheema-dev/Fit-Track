import { Trash2, Edit2, Calendar, Clock, Flame } from 'lucide-react';

const ActivityCard = ({ workout, onDelete, onEdit, index }) => {
  return (
    <div 
      className={`card spring-in stagger-${(index % 5) + 1} hover-lift`} 
      style={styles.card}
    >
      <div style={styles.header}>
        <h3 style={styles.activity}>{workout.activity}</h3>
        <div style={styles.actions}>
          <button onClick={() => onEdit(workout)} className="hover-lift" style={styles.editBtn}>
            <Edit2 size={18} />
          </button>
          <button onClick={() => onDelete(workout.id)} className="hover-lift" style={styles.deleteBtn}>
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      <div style={styles.details}>
        <div style={styles.detail}>
          <Clock size={16} color="var(--primary)" />
          <span>{workout.duration} mins</span>
        </div>
        <div style={styles.detail}>
          <Flame size={16} color="var(--danger)" />
          <span>{workout.calories} kcal</span>
        </div>
        <div style={styles.detail}>
          <Calendar size={16} color="#64748b" />
          <span>{workout.date}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'var(--transition)',
    opacity: 0, // Hidden until animation starts
    animationFillMode: 'forwards',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activity: {
    fontSize: '1.25rem',
    color: 'var(--text-light)',
    textTransform: 'capitalize',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  editBtn: {
    background: 'none',
    color: 'var(--primary)',
    padding: '0.25rem',
  },
  deleteBtn: {
    background: 'none',
    color: 'var(--danger)',
    padding: '0.25rem',
  },
  details: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: 'var(--text-light)',
    opacity: 0.8,
  }
};

export default ActivityCard;