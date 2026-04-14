import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero section" id="about">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="hero-subtitle">Hello, I'm</h2>
            <h1 className="hero-title">
              <span className="gradient-text">{portfolioData.profile.name}</span>
            </h1>
            <h3 className="hero-role">{portfolioData.profile.title}</h3>
            
            <p className="hero-summary">{portfolioData.profile.summary}</p>
            
            <div className="hero-actions">
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {portfolioData.profile.cvs.map((cv, index) => (
                  <button 
                    key={index}
                    className="btn btn-primary"
                    onClick={() => window.open(`${import.meta.env.BASE_URL}${cv.filename}`, '_blank')}
                  >
                    <Download size={20} />
                    {cv.label}
                  </button>
                ))}
              </div>
              
              <div className="social-links">
                <a href={portfolioData.profile.githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={24} />
                </a>
                <a href={portfolioData.profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={24} />
                </a>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.profile.email}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
