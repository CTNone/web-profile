import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              className="card project-card"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "https://github.com" && project.liveUrl !== "https://example.com" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="project-meta">
                <span className="badge-outline">{project.role}</span>
                {project.date && <span className="project-date">{project.date}</span>}
              </div>

              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
