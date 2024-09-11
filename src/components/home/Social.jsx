import React from "react";
import { FiInstagram, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/zidanepf?igsh=MTZ1dWljdW9nZnl4cQ==" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://www.linkedin.com/in/zidanepf/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;