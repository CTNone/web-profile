import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Extracurricular = () => {
  return (
    <section className="extracurricular section" id="extracurricular">
      <div className="container">
        <h2 className="section-title">Hoạt động Ngoại khóa & Đam mê</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {portfolioData.extracurricular.map((item, index) => (
              <motion.div 
                key={item.id}
                className="carousel-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="carousel-img-wrapper card">
                  <img src={item.imageUrl} alt={item.title} className="carousel-img" />
                  <div className="carousel-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
