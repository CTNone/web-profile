import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  return (
    <header className="navbar glass">
      <div className="container nav-content">
        <div className="logo">
          <a href="#">{portfolioData.profile.name}.</a>
        </div>
        <nav className="nav-links">
          <a href="#about">Giới thiệu</a>
          <a href="#orientation">Định hướng</a>
          <a href="#experience">Kinh nghiệm</a>
          <a href="#education">Học tập</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#projects">Dự án</a>
          <a href="#awards">Giải thưởng</a>
          <a href="#extracurricular">Ngoại khóa</a>
        </nav>
        <div className="dropdown">
          <button className="btn btn-outline" style={{ gap: '0.4rem' }}>
            <Download size={18} />
            Download CV
          </button>
          <div className="dropdown-content">
            <div className="dropdown-inner">
              {portfolioData.profile.cvs.map((cv, index) => (
                <div 
                  key={index} 
                  className="dropdown-item"
                  onClick={() => window.open(`${import.meta.env.BASE_URL}${cv.filename}`, '_blank')}
                >
                  <Download size={16} />
                  {cv.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
