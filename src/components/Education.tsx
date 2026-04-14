import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">Học tập</h2>
        <div className="timeline">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              className="timeline-item"
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              <div className="timeline-content card">
                <span className="timeline-date">{edu.date}</span>
                <h3 className="timeline-title">{edu.degree}</h3>
                <h4 className="timeline-institution">{edu.institution}</h4>
                <p className="timeline-desc">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
