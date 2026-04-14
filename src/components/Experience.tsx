import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Kinh nghiệm làm việc</h2>
        <div className="timeline">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content card">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.role}</h3>
                <h4 className="timeline-institution">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
                
                <div className="project-tech" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {exp.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline btn-sm"
                      style={{ gap: '0.4rem' }}
                    >
                      {link.label.toLowerCase() === 'github' ? <Github size={14} /> : <ExternalLink size={14} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
