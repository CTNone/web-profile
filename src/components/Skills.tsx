import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const categories = Array.from(new Set(portfolioData.skills.map((s) => s.category)));

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {categories.map((category, index) => {
            const catSkills = portfolioData.skills.filter(s => s.category === category);
            return (
              <motion.div 
                className="card skill-card"
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="card-title">{category}</h3>
                <div className="skill-tags">
                  {catSkills.map(skill => (
                    <span 
                      key={skill.id} 
                      className={`badge ${skill.proficiency === 'Advanced' ? 'badge-advanced' : skill.proficiency === 'Intermediate' ? 'badge-intermediate' : 'badge-fresher'}`}
                    >
                      {skill.name} <span className="proficiency-dot"></span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
