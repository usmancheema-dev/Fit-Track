import { Link } from 'react-router-dom';
import { Play, TrendingUp, Target, Award, Activity, BarChart3, Shield, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = ({ workouts }) => {
  const totalCalories = workouts.reduce((sum, w) => sum + Number(w.calories), 0);
  const totalMinutes = workouts.reduce((sum, w) => sum + Number(w.duration), 0);
  const workoutCount = workouts.length;

  // Animated counters
  const totalBadges = Math.round(totalCalories / 500);


  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBackground}>
          <div style={styles.heroBackgroundImage}></div>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroPattern}></div>
        </div>
        <div className="container" style={styles.heroContent}>
          <div style={styles.heroText}>
            <div style={styles.badge}>
              <Star size={16} fill="var(--primary)" color="var(--primary)" />
              <span>#1 Fitness Tracking App</span>
            </div>
            <h1 style={styles.title}>
              Transform Your <span style={{ color: 'var(--primary)' }}>Fitness Journey</span> with FitTrack
            </h1>
            <p style={styles.subtitle}>
              Join thousands of users who have achieved their fitness goals. Track workouts, monitor progress, and stay motivated with our comprehensive fitness platform.
            </p>
            <div style={styles.heroActions}>
              <Link to="/dashboard" className="btn-primary" style={styles.cta}>
                <Play size={20} fill="white" />
                <span>Start Tracking</span>
              </Link>
            </div>
          </div>

          <div style={styles.heroCard} className="hover-lift stagger-2">
            <div style={styles.dashboardPreview}>
              <div style={styles.previewHeader}>
                <Activity size={20} color="var(--primary)" />
                <span>Real-time Progress</span>
              </div>
              <div style={styles.previewStats}>
                <div style={styles.previewStat}>
                  <div>
                    <span style={styles.previewValue}>{totalCalories}</span>
                    <span style={{ ...styles.previewLabel, color: 'white', opacity: 0.7 }}> kcal</span>
                  </div>
                  <div style={{ ...styles.previewLabel, color: 'white', opacity: 0.7 }}>Calories Burned</div>
                </div>
                <div style={styles.previewStat}>
                  <div>
                    <span style={styles.previewValue}>{workoutCount}</span>
                  </div>
                  <div style={{ ...styles.previewLabel, color: 'white', opacity: 0.7 }}>Workouts Done</div>
                </div>
              </div>
              <div style={styles.progressBar}>
                <div style={styles.progressFill}></div>
              </div>
              <div style={{ ...styles.progressText, color: 'white', opacity: 0.7 }}>
                75% of weekly goal reached
              </div>
            </div>

            {/* Decorative Elements */}
            <div style={styles.floatingElements}>
              <div style={{...styles.floatingIcon, ...styles.floating1}}>
                <TrendingUp size={20} color="var(--success)" />
              </div>
              <div style={{...styles.floatingIcon, ...styles.floating2}}>
                <Award size={20} color="#fbbf24" />
              </div>
              <div style={{...styles.floatingIcon, ...styles.floating3}}>
                <Target size={20} color="var(--primary)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary Section */}
      <section style={styles.statsSection}>
        <div className="container" style={styles.statsGrid}>
          <div className="card" style={styles.statItem}>
            <Target size={32} color="var(--primary)" />
            <h3>{workoutCount}</h3>
            <p>Workouts Completed</p>
          </div>
          <div className="card" style={styles.statItem}>
            <TrendingUp size={32} color="var(--success)" />
            <h3>{totalMinutes}</h3>
            <p>Minutes Active</p>
          </div>
          <div className="card" style={styles.statItem}>
            <Award size={32} color="#fbbf24" />
            <h3>{totalBadges}</h3>
            <p>Badges Earned</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Powerful Features for Your Fitness Goals</h2>
            <p style={styles.sectionSubtitle}>Everything you need to track, analyze, and improve your fitness journey</p>
          </div>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Activity size={32} color="var(--primary)" />
              </div>
              <h4 style={styles.featureTitle}>Smart Workout Logging</h4>
              <p style={styles.featureDesc}>Log activities with detailed metrics including duration, calories burned, and custom notes.</p>
              <ul style={styles.featureList}>
                <li><CheckCircle size={16} color="var(--success)"/> Multiple activity types</li>
                <li><CheckCircle size={16} color="var(--success)"/> Real-time calorie calculation</li>
                <li><CheckCircle size={16} color="var(--success)"/> Progress tracking</li>
              </ul>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <BarChart3 size={32} color="var(--primary)" />
              </div>
              <h4 style={styles.featureTitle}>Advanced Analytics</h4>
              <p style={styles.featureDesc}>Visualize your progress with comprehensive charts and detailed performance insights.</p>
              <ul style={styles.featureList}>
                <li><CheckCircle size={16} color="var(--success)"/> Interactive dashboards</li>
                <li><CheckCircle size={16} color="var(--success)"/> Trend analysis</li>
                <li><CheckCircle size={16} color="var(--success)"/> Goal tracking</li>
              </ul>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Shield size={32} color="var(--primary)" />
              </div>
              <h4 style={styles.featureTitle}>Secure & Private</h4>
              <p style={styles.featureDesc}>Your fitness data is stored locally and never shared. Complete privacy and security.</p>
              <ul style={styles.featureList}>
                <li><CheckCircle size={16} color="var(--success)"/> Local storage only</li>
                <li><CheckCircle size={16} color="var(--success)"/> No data sharing</li>
                <li><CheckCircle size={16} color="var(--success)"/> Offline access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Gallery Section */}
      <section style={styles.gallerySection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Track Every Workout Type</h2>
            <p style={styles.sectionSubtitle}>From cardio to strength training, FitTrack supports all your fitness activities</p>
          </div>
          <div style={styles.galleryGrid}>
            <div style={styles.galleryItem}>
              <div style={styles.galleryImage} className="gallery-img-1"></div>
              <div style={styles.galleryOverlay}>
                <h4 style={styles.galleryTitle}>Cardio Training</h4>
                <p style={styles.galleryDesc}>Running, cycling, swimming</p>
              </div>
            </div>
            <div style={styles.galleryItem}>
              <div style={styles.galleryImage} className="gallery-img-2"></div>
              <div style={styles.galleryOverlay}>
                <h4 style={styles.galleryTitle}>Strength Training</h4>
                <p style={styles.galleryDesc}>Weight lifting, resistance training</p>
              </div>
            </div>
            <div style={styles.galleryItem}>
              <div style={styles.galleryImage} className="gallery-img-3"></div>
              <div style={styles.galleryOverlay}>
                <h4 style={styles.galleryTitle}>Sports & Activities</h4>
                <p style={styles.galleryDesc}>Basketball, tennis, yoga, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>What Our Users Say</h2>
            <p style={styles.sectionSubtitle}>Real results from real people achieving their fitness goals</p>
          </div>
          <div style={styles.testimonialsGrid}>
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <p style={styles.testimonialText}>
                "FitTrack has completely transformed how I approach my fitness. The detailed tracking and beautiful visualizations keep me motivated every day."
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>S</div>
                <div>
                  <div style={styles.authorName}>Sarah Johnson</div>
                  <div style={styles.authorTitle}>Marathon Runner</div>
                </div>
              </div>
            </div>
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <p style={styles.testimonialText}>
                "The analytics are incredible. I can see exactly how my training is improving over time. This app is a game-changer for serious athletes."
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>M</div>
                <div>
                  <div style={styles.authorName}>Mike Chen</div>
                  <div style={styles.authorTitle}>CrossFit Athlete</div>
                </div>
              </div>
            </div>
            <div style={styles.testimonialCard}>
              <div style={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <p style={styles.testimonialText}>
                "Simple, effective, and beautiful. FitTrack makes logging workouts enjoyable rather than a chore. My consistency has improved dramatically."
              </p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>E</div>
                <div>
                  <div style={styles.authorName}>Emma Davis</div>
                  <div style={styles.authorTitle}>Fitness Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="container" style={styles.ctaContent}>
          <div style={styles.ctaText}>
            <h2 style={styles.ctaTitle}>Ready to Transform Your Fitness Journey?</h2>
            <p style={styles.ctaSubtitle}>Join thousands of users who are already achieving their goals with FitTrack.</p>
            <div style={styles.ctaButtons}>
              <Link to="/dashboard" className="btn-primary" style={styles.ctaBtn}>
                <Play size={20} fill="white" />
                <span>Start Your Journey</span>
              </Link>
              <div style={styles.ctaFeatures}>
                <div style={styles.ctaFeature}>
                  <CheckCircle size={16} color="var(--success)" />
                  <span>Free to use</span>
                </div>
                <div style={styles.ctaFeature}>
                  <CheckCircle size={16} color="var(--success)" />
                  <span>No registration required</span>
                </div>
                <div style={styles.ctaFeature}>
                  <CheckCircle size={16} color="var(--success)" />
                  <span>Works offline</span>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.ctaImage}>
            <div style={styles.successCard}>
              <div style={styles.successIcon}>
                <Award size={48} color="var(--primary)" />
              </div>
              <h3 style={styles.successTitle}>Achievement Unlocked!</h3>
              <p style={styles.successText}>You've taken the first step towards a healthier you.</p>
              <div style={styles.successStats}>
                <div style={styles.successStat}>
                  <span style={styles.successNumber}>{workoutCount}</span>
                  <span style={styles.successLabel}>Workouts</span>
                </div>
                <div style={styles.successStat}>
                  <span style={styles.successNumber}>{totalCalories}</span>
                  <span style={styles.successLabel}>Calories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    padding: '10rem 0 8rem',
    backgroundColor: 'var(--card-light)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'var(--transition)',
    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)',
  },
  heroBackgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60%',
    height: '100%',
    backgroundImage: 'url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    opacity: 0.4,
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, transparent 0%, var(--card-light) 90%)',
    zIndex: 2,
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '100%',
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
    opacity: 0.05,
    clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  floatingParticles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    backgroundColor: 'var(--primary)',
    borderRadius: '50%',
    opacity: 0.6,
  },
  particle1: {
    top: '20%',
    left: '10%',
    animationDelay: '0s',
  },
  particle2: {
    top: '60%',
    right: '15%',
    animationDelay: '2s',
  },
  particle3: {
    bottom: '30%',
    left: '70%',
    animationDelay: '4s',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '3rem',
    position: 'relative',
    zIndex: 3,
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroText: {
    width: '100%',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    backdropFilter: 'blur(4px)',
    padding: '0.5rem 1.25rem',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--primary)',
    marginBottom: '1.5rem',
    border: '1px solid rgba(37, 99, 235, 0.2)',
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    color: 'var(--text-light)',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-light)',
    opacity: 0.8,
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  heroActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.25rem 2.5rem',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '700',
    borderRadius: '1rem',
    boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)',
  },
  stats: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary)',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: 'var(--text-light)',
    opacity: 0.7,
  },
  heroImage: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fitnessIllustration: {
    position: 'relative',
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  fitnessSvg: {
    width: '200px',
    height: '200px',
    filter: 'drop-shadow(0 10px 25px rgb(0 0 0 / 0.1))',
  },
  floatingElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  floatingIcon: {
    position: 'absolute',
    backgroundColor: 'var(--bg-light)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgb(0 0 0 / 0.15)',
    border: '2px solid var(--border-light)',
  },
  floating1: {
    top: '10%',
    left: '10%',
    animationDelay: '0s',
  },
  floating2: {
    top: '20%',
    right: '15%',
    animationDelay: '1s',
  },
  floating3: {
    bottom: '15%',
    left: '20%',
    animationDelay: '2s',
  },
  progressRings: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
  ring: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringText: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'var(--primary)',
  },
  heroCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '2rem',
    padding: '2.5rem',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '400px',
    width: '100%',
    position: 'relative',
    color: 'white',
    overflow: 'visible',
  },
  dashboardPreview: {
    textAlign: 'center',
  },
  previewHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'var(--text-light)',
  },
  previewStats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1.5rem',
  },
  previewStat: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  previewValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary)',
  },
  previewLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-light)',
    opacity: 0.7,
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: 'var(--border-light)',
    borderRadius: '4px',
    marginBottom: '0.5rem',
    overflow: 'hidden',
  },
  progressFill: {
    width: '75%',
    height: '100%',
    background: 'linear-gradient(90deg, var(--primary), var(--success))',
    borderRadius: '4px',
  },
  progressText: {
    fontSize: '0.75rem',
    color: 'var(--text-light)',
    opacity: 0.7,
  },
  featuresSection: {
    padding: '6rem 0',
    backgroundColor: 'var(--bg-light)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: 'var(--text-light)',
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: 'var(--text-light)',
    opacity: 0.8,
    maxWidth: '600px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    backgroundColor: 'var(--card-light)',
    padding: '2.5rem',
    borderRadius: '1.5rem',
    border: '1px solid var(--border-light)',
    textAlign: 'center',
    transition: 'var(--transition)',
  },
  featureIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: 'var(--primary-light)',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    color: 'var(--text-light)',
    marginBottom: '1rem',
  },
  featureDesc: {
    color: 'var(--text-light)',
    opacity: 0.8,
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  testimonialsSection: {
    padding: '6rem 0',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  testimonialCard: {
    backgroundColor: 'var(--card-light)',
    padding: '2rem',
    borderRadius: '1.5rem',
    border: '1px solid var(--border-light)',
    transition: 'var(--transition)',
  },
  testimonialStars: {
    display: 'flex',
    gap: '0.25rem',
    marginBottom: '1rem',
  },
  testimonialText: {
    color: 'var(--text-light)',
    opacity: 0.9,
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  authorAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--primary)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  authorName: {
    fontWeight: '600',
    color: 'var(--text-light)',
  },
  authorTitle: {
    fontSize: '0.875rem',
    color: 'var(--text-light)',
    opacity: 0.7,
  },
  ctaSection: {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
    color: 'white',
  },
  ctaContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  ctaText: {
    flex: 1,
    minWidth: '300px',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'white',
  },
  ctaSubtitle: {
    fontSize: '1.125rem',
    opacity: 0.9,
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.25rem 2.5rem',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    backgroundColor: 'white',
    color: 'var(--primary)',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.2)',
  },
  ctaFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  ctaFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
  },
  ctaImage: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  successCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '2rem',
    padding: '3rem 2rem',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  successIcon: {
    marginBottom: '1.5rem',
  },
  successTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: 'white',
  },
  successText: {
    opacity: 0.9,
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  successStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  successStat: {
    textAlign: 'center',
  },
  successNumber: {
    display: 'block',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
  },
  successLabel: {
    fontSize: '0.875rem',
    opacity: 0.8,
  },
  gallerySection: {
    padding: '6rem 0',
    backgroundColor: 'var(--bg-light)',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    height: '250px',
    transition: 'var(--transition)',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'var(--transition)',
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    padding: '2rem 1.5rem 1.5rem',
    color: 'white',
  },
  galleryTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  galleryDesc: {
    opacity: 0.9,
    margin: 0,
    fontSize: '0.875rem',
  },
  // Legacy styles (keeping for compatibility)
  statsSection: {
    padding: '2rem 0',
    marginTop: '-4rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  statItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(15px)',
    padding: '3rem 2rem',
    borderRadius: '2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'var(--transition)',
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
    color: 'white',
  },
};

export default Home;
