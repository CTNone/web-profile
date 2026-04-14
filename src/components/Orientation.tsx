import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Compass } from 'lucide-react';

const Orientation = () => {
  return (
    <section className="orientation section" id="orientation">
      <div className="container">
        <h2 className="section-title">Định hướng tương lai</h2>
        <motion.div 
          className="card orientation-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem', textAlign: 'center' }}
        >
          <div className="award-icon" style={{ margin: '0 auto 1.5rem', background: 'rgba(5, 150, 105, 0.1)' }}>
            <Compass size={32} className="accent-color" />
          </div>
          <p className="hero-summary" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 0 }}>
            {portfolioData.profile.orientation}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Orientation;
