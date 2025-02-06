import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';  // Importing the local image

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />  {/* Using the imported image */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NgJoeYi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ng-joe-yi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ng Joe Yi</h1>
          <p>Aspiring Software Engineer</p>

          <a href="/resume.pdf" download="NgJoeYi_Resume.pdf" className="download-btn">
            Download Resume
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
