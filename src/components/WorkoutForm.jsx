import { useState, useEffect } from 'react';
import { PlusCircle, Loader2 } from 'lucide-react';

const WorkoutForm = ({ onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    activity: '',
    duration: '',
    calories: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({ ...prev, ...editData }));
    }
  }, [editData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.activity) newErrors.activity = 'Activity is required';
    if (!formData.duration || formData.duration <= 0) newErrors.duration = 'Valid duration is required';
    if (!formData.calories || formData.calories <= 0) newErrors.calories = 'Valid calories are required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formData);
    setFormData({
      activity: '',
      duration: '',
      calories: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card fade-in" style={styles.form}>
      <h3 style={styles.title}>{editData ? 'Update Workout' : 'Log New Workout'}</h3>
      
      <div style={styles.field}>
        <label>Activity Name</label>
        <input 
          type="text" 
          name="activity" 
          placeholder="e.g., Running, Cycling, Swimming" 
          value={formData.activity} 
          onChange={handleChange}
          style={errors.activity ? { borderColor: 'var(--danger)' } : {}}
        />
        {errors.activity && <span style={styles.error}>{errors.activity}</span>}
      </div>

      <div style={styles.row}>
        <div style={{ ...styles.field, flex: 1 }}>
          <label>Duration (mins)</label>
          <input 
            type="number" 
            name="duration" 
            placeholder="0" 
            value={formData.duration} 
            onChange={handleChange}
            style={errors.duration ? { borderColor: 'var(--danger)' } : {}}
          />
          {errors.duration && <span style={styles.error}>{errors.duration}</span>}
        </div>
        <div style={{ ...styles.field, flex: 1 }}>
          <label>Calories</label>
          <input 
            type="number" 
            name="calories" 
            placeholder="0" 
            value={formData.calories} 
            onChange={handleChange}
            style={errors.calories ? { borderColor: 'var(--danger)' } : {}}
          />
          {errors.calories && <span style={styles.error}>{errors.calories}</span>}
        </div>
      </div>

      <div style={styles.field}>
        <label>Date</label>
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-primary hover-lift" style={styles.button}>
        {editData ? 'Update Activity' : (
          <>
            <PlusCircle size={18} />
            <span>Add Activity</span>
          </>
        )}
      </button>
    </form>
  );
};

const styles = {
  form: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '1.5rem',
    color: 'var(--text-light)',
    textAlign: 'center',
  },
  field: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%',
    padding: '0.875rem',
    marginTop: '0.5rem',
  },
  error: {
    color: 'var(--danger)',
    fontSize: '0.75rem',
    marginTop: '-0.75rem',
    marginBottom: '0.5rem',
  }
};

export default WorkoutForm;
