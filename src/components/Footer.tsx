import { portfolioData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href={portfolioData.profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={portfolioData.profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
