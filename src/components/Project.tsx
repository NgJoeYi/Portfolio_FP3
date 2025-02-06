import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faJava, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faRobot, faLaptopCode, faGamepad, faDesktop, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import snakeGame from '../assets/images/snakeGame.png';
import puzzleGame from '../assets/images/2048.png';
import ticketFinder from '../assets/images/TicketFinder.png';
import blockBust from '../assets/images/blockBuzz.png';  // Added Block Bust image
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                
                {/* Project 1: Event Ticketing Mobile App */}
                <div className="project-container">
                    <div className="project">
                        <a href="https://github.com/emery97/MAD24_P02_Team3" target="_blank" rel="noreferrer">
                            <img src={ticketFinder} className="zoom" alt="Event Ticketing Mobile App" width="100%" />
                        </a>
                        <a href="https://github.com/emery97/MAD24_P02_Team3" target="_blank" rel="noreferrer">
                            <h2>Event Ticketing Mobile App</h2>
                        </a>
                        <p>A mobile application designed for event ticketing, featuring event discovery, personalized recommendations, and chatbot-assisted navigation. Developed in Android Studio using Java and integrated with Firebase and Google APIs.</p>
                        <div className="technologies-used">
                            <div className="flex-chips">
                                <Chip icon={<FontAwesomeIcon icon={faAndroid} />} className="chip" label="Android Studio" />
                                <Chip icon={<FontAwesomeIcon icon={faJava} />} className="chip" label="Java" />
                                <Chip icon={<FontAwesomeIcon icon={faDatabase} />} className="chip" label="Firebase" />
                                <Chip icon={<FontAwesomeIcon icon={faGoogle} />} className="chip" label="Google Cloud API" />
                                <Chip icon={<FontAwesomeIcon icon={faRobot} />} className="chip" label="Firebase ML Smart Reply" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2: Snake Game */}
                <div className="project-container">
                    <div className="project">
                        <a href="https://github.com/NgJoeYi/Snake_Game_2024" target="_blank" rel="noreferrer">
                            <img src={snakeGame} className="zoom" alt="Snake Game" width="100%" />
                        </a>
                        <a href="https://github.com/NgJoeYi/Snake_Game_2024" target="_blank" rel="noreferrer">
                            <h2>Snake Game</h2>
                        </a>
                        <p>Classic Snake Game developed with Java, showcasing dynamic gameplay logic and responsive design. Check out the source code on GitHub.</p>
                        <div className="technologies-used">
                            <div className="flex-chips">
                                <Chip icon={<FontAwesomeIcon icon={faJava} />} className="chip" label="Java" />
                                <Chip icon={<FontAwesomeIcon icon={faLaptopCode} />} className="chip" label="OOP" />
                                <Chip icon={<FontAwesomeIcon icon={faGamepad} />} className="chip" label="Game Development" />
                                <Chip icon={<FontAwesomeIcon icon={faDesktop} />} className="chip" label="Swing GUI" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3: 2048 Game */}
                <div className="project-container">
                    <div className="project">
                        <a href="https://github.com/NgJoeYi/2048Game_2025" target="_blank" rel="noreferrer">
                            <img src={puzzleGame} className="zoom" alt="2048 Game" width="100%" />
                        </a>
                        <a href="https://github.com/NgJoeYi/2048Game_2025" target="_blank" rel="noreferrer">
                            <h2>2048 Game</h2>
                        </a>
                        <p>A modern take on the classic 2048 puzzle game, developed with Java and featuring an intuitive user interface. The project highlights clean design and smooth gameplay mechanics.</p>
                        <div className="technologies-used">
                            <div className="flex-chips">
                                <Chip icon={<FontAwesomeIcon icon={faJava} />} className="chip" label="Java" />
                                <Chip icon={<FontAwesomeIcon icon={faLaptopCode} />} className="chip" label="OOP" />
                                <Chip icon={<FontAwesomeIcon icon={faGamepad} />} className="chip" label="Game Development" />
                                <Chip icon={<FontAwesomeIcon icon={faDesktop} />} className="chip" label="JavaFX GUI" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 4: Block Bust */}
                <div className="project-container">
                    <div className="project">
                        <a href="https://github.com/NgJoeYi/puzzle_2024" target="_blank" rel="noreferrer">
                            <img src={blockBust} className="zoom" alt="Block Bust Game" width="100%" />
                        </a>
                        <a href="https://github.com/NgJoeYi/puzzle_2024" target="_blank" rel="noreferrer">
                            <h2>Block Buzz</h2>
                        </a>
                        <p>Block Bust is a fast-paced puzzle game inspired by classic arcade mechanics. Developed using Java and Android Studio, it features engaging levels and dynamic gameplay for puzzle enthusiasts.</p>
                        <div className="technologies-used">
                            <div className="flex-chips">
                                <Chip icon={<FontAwesomeIcon icon={faJava} />} className="chip" label="Java" />
                                <Chip icon={<FontAwesomeIcon icon={faAndroid} />} className="chip" label="Android Studio" />
                                <Chip icon={<FontAwesomeIcon icon={faGamepad} />} className="chip" label="Game Development" />
                                <Chip icon={<FontAwesomeIcon icon={faPuzzlePiece} />} className="chip" label="Puzzle Mechanics" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
