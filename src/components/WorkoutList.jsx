import ActivityCard from './ActivityCard';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

const WorkoutList = ({ workouts, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredWorkouts = workouts
    .filter(w => w.activity.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(w => filterType === 'all' || (filterType === 'high' ? w.calories > 300 : w.calories <= 300))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <div style={styles.searchWrapper}>
          <Search size={18} style={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search activities..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
          style={styles.filterSelect}
        >
          <option value="all">All Calories</option>
          <option value="high">High (&gt;300 kcal)</option>
          <option value="low">Low (&lt;=300 kcal)</option>
        </select>
      </div>

      <div style={styles.grid}>
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((workout, index) => (
            <ActivityCard 
              key={workout.id} 
              workout={workout} 
              index={index}
              onDelete={onDelete} 
              onEdit={onEdit} 
            />
          ))
        ) : (
          <div style={styles.empty}>
            <p>No workouts found. Start tracking!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  searchWrapper: {
    position: 'relative',
    flex: 2,
    minWidth: '200px',
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '35%',
    transform: 'translateY(-50%)',
    color: 'var(--text-light)',
    opacity: 0.5,
  },
  searchInput: {
    paddingLeft: '2.5rem',
    marginBottom: 0,
  },
  filterSelect: {
    flex: 1,
    minWidth: '150px',
    marginBottom: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  empty: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'var(--card-light)',
    borderRadius: '1rem',
    opacity: 0.6,
  }
};

export default WorkoutList;
