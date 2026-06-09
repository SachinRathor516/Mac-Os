import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'
import process from "process";
window.process = process;



const MacWindow = ({children}) => {
    return (
        <Rnd
        default={{
            width:'50vw',
            height:'50vh',
            x:250,
            y:100
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title"><p>sachinrathor - zsh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
