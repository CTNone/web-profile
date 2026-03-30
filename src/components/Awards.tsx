import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, FileText } from 'lucide-react';

const Awards = () => {
  return (
    <section className="awards section" id="awards">
      <div className="container">
        <h2 className="section-title">Awards & Certifications</h2>
        <div className="awards-list">
          {portfolioData.awards.map((award, index) => (
            <motion.div 
              className="card award-card"
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="award-icon">
                <Award size={28} className="accent-color" />
              </div>
              <div className="award-info">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-issuer">{award.issuer}</p>
              </div>
              <div className="award-meta">
                <span className="award-date">{award.date}</span>
                <a 
                  href={award.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm"
                >
                  <FileText size={16} />
                  View PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
