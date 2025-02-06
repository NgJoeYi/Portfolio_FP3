import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faDatabase, faMobileAlt, faCloud, faCog, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode, faJava, faJsSquare, faPython, faAndroid, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
    { name: "JavaScript", icon: faJsSquare },
    { name: "TypeScript", icon: faCode },
    { name: "Java", icon: faJava },
    { name: "C++", icon: faCode },
    { name: "C#", icon: faCode },
    { name: "Python", icon: faPython },
    { name: "SQL", icon: faDatabase },
    { name: "HTML5", icon: faCode },
    { name: "CSS3", icon: faCode },
    { name: "SASS", icon: faCode }
];

const frameworksTools = [
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNode },
    { name: "PostgreSQL", icon: faDatabase },
    { name: "Firebase", icon: faCloud },
    { name: "Postman", icon: faTools },
    { name: "Git", icon: faGitAlt }
];

const technologies = [
    { name: "Android Studio", icon: faAndroid },
    { name: "Firebase ML", icon: faCloud },
    { name: "Google Cloud Translation API", icon: faCloud },
    { name: "Speech-to-Text", icon: faCloud },
    { name: "Power Automate", icon: faCog },
    { name: "Linux", icon: faCogs },
    { name: "Visual Studio Code", icon: faCode }
]; 
  
function Technologies() {
    return (
        <div className="container" id="technologies">
            <div className="skills-container">
                <h1>Technologies</h1>
                <div className="skills-grid">

                    {/* Programming Languages */}
                    <div className="expertise-container">
                        <div className="skill">
                            <FontAwesomeIcon icon={faCode} size="3x" />
                            <h3>Programming Languages</h3>
                            <p>Proficient in a range of programming languages, from frontend development to backend logic and data management.</p>
                            <div className="flex-chips">
                                {languages.map((item, index) => (
                                    <Chip key={index} icon={<FontAwesomeIcon icon={item.icon} />} className='chip' label={item.name} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Frameworks & Tools */}
                    <div className="expertise-container">
                        <div className="skill">
                            <FontAwesomeIcon icon={faTools} size="3x" />
                            <h3>Frameworks & Tools</h3>
                            <p>Experienced with modern frameworks and development tools that streamline the software development lifecycle.</p>
                            <div className="flex-chips">
                                {frameworksTools.map((item, index) => (
                                    <Chip key={index} icon={<FontAwesomeIcon icon={item.icon} />} className='chip' label={item.name} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technologies & Platforms */}
                    <div className="expertise-container">
                        <div className="skill">
                            <FontAwesomeIcon icon={faDatabase} size="3x" />
                            <h3>Technologies & Platforms</h3>
                            <p>Familiar with a variety of platforms and technologies, including cloud services, mobile development, and automation tools.</p>
                            <div className="flex-chips">
                                {technologies.map((item, index) => (
                                    <Chip key={index} icon={<FontAwesomeIcon icon={item.icon} />} className='chip' label={item.name} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Technologies;
