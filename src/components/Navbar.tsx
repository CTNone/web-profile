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
          <a href="#education">Học tập</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#projects">Dự án</a>
          <a href="#awards">Giải thưởng</a>
          <a href="#extracurricular">Ngoại khóa</a>
        </nav>
        <button className="btn btn-outline" onClick={() => window.open('/cv.pdf', '_blank')}>
          <Download size={18} />
          CV
        </button>
      </div>
    </header>
  );
};

export default Navbar;
