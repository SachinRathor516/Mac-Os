import React from 'react'
import MacWindow from './MacWindow'
import TerminalModule from "react-console-emulator";
import './cli.scss'

const Terminal = TerminalModule.default;


const Cli = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={{
                        about: {
                            description: 'Show a brief portfolio summary.',
                            usage: 'about',
                            fn: () => 'Hi! I\'m Sachin Rathor, a frontend developer building interactive apps with React, Vite, and modern web tech.'
                        },
                        skills: {
                            description: 'List technical skills.',
                            usage: 'skills',
                            fn: () => 'Skills: React, JavaScript, CSS, HTML, Vite, SCSS, responsive design.'
                        },
                        projects: {
                            description: 'Show sample portfolio projects.',
                            usage: 'projects',
                            fn: () => 'Projects: MacOS portfolio UI, interactive terminal window, GitHub dashboard demo, Spotify UI clone.'
                        },
                        resume: {
                            description: 'Show a resume or CV link.',
                            usage: 'resume',
                            fn: () => 'Resume: https://example.com/resume.pdf (replace with your actual URL)'
                        },
                        contact: {
                            description: 'Show contact information.',
                            usage: 'contact',
                            fn: () => 'Contact: sachin@example.com | GitHub: github.com/sachinrathor | LinkedIn: linkedin.com/in/sachinrathor'
                        },
                        echo: {
                            description: 'Echo a passed string.',
                            usage: 'echo <string>',
                            fn: (...args) => args.join(' ')
                        }
                    }}
                    welcomeMessage={`Welcome to Sachin Rathor\'s portfolio terminal!\nType 'help' to list available commands.\nAvailable commands: help, about, skills, projects, resume, contact, echo <text>`}
                    promptLabel={'sachinRathor:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}

                />
            </div>
        </MacWindow>
    )
}

export default Cli
