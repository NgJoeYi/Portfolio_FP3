import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
    "JavaScript", "TypeScript", "Java", "C++", "C#", "Python", "SQL", "HTML5", "CSS3", "SASS"
];

const frameworksTools = [
    "React", "Node.js", "Flask", "PostgreSQL", "Firebase", "Postman", "Git", "Docker", "AWS", "Google Cloud"
];

const technologies = [
    "Android Studio", "Firebase ML", "Google Cloud Translation API", "Speech-to-Text", 
    "Pandas", "Power Automate", "Linux", "GitHub Actions"
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
                                {languages.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
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
                                {frameworksTools.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
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
                                {technologies.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
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
