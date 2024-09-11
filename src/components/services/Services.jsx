import React, { useState } from 'react';
import './services.css';
import { HiOutlineArrowSmRight, HiX } from 'react-icons/hi';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.jpg';
import user5 from '../../assets/user5.jpg';
import user6 from '../../assets/user6.jpg';
import user7 from '../../assets/user7.jpg';
import user8 from '../../assets/user8.jpeg';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const teamMembers = [
        { name: 'Zidane Putra', photo: user1, university: 'Universitas Sriwijaya', insta: 'https://www.instagram.com/zidanepf?igsh=MTZ1dWljdW9nZnl4cQ==', linkedin: 'http://linkedin.com/in/zidanepf' },
        { name: 'Dyah Ayu Wulandari', photo: user2, university: 'Universitas Brawijaya', insta: 'https://www.instagram.com/zidanepf?igsh=MTZ1dWljdW9nZnl4cQ==', linkedin: 'http://linkedin.com/in/dyahayuw' },
        { name: 'Echa Andrea Gustiar', photo: user3, university: 'Universitas Lampung', insta: 'https://www.instagram.com/echreaa?igsh=MWNwcHFkZ3prZ3R3dQ==', linkedin: 'https://www.linkedin.com/in/echa-andrea-gustiar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        { name: 'Rachel Valentina S', photo: user4, university: 'Universitas Katolik Soegijapranata Semarang', insta: 'https://www.instagram.com/y0ur.valent_?igsh=MWN6cG1jMHhmazRibQ==', linkedin: 'http://linkedin.com/in/dyahayuw' },
        { name: 'Augrecelline', photo: user5, university: 'Binus University', insta: 'https://www.instagram.com/cellineisme/profilecard/?igsh=MTYwYjBnNzA5MGQyaw==', linkedin: 'http://linkedin.com/in/augrecelline-ab3945317' },
        { name: 'Ilham Ramadhan', photo: user6, university: 'STMIK Sinar Nusantara', insta: 'https://www.instagram.com/cellineisme/profilecard/?igsh=MTYwYjBnNzA5MGQyaw==', linkedin: 'https://www.linkedin.com/in/ilramadhan' },
        { name: 'I Nengah Danarsa Suniadevta', photo: user7, university: 'Universitas Udayana', insta: 'https://www.instagram.com/devtadanarsa?igsh=MWgwcnNlY2xiMHBpbw%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/i-nengah-danarsa-suniadevta' },
        { name: 'Gilang Wiko W', photo: user8, university: 'Universitas Muhammadiyah Riau', insta: 'https://www.instagram.com/devtadanarsa?igsh=MWgwcnNlY2xiMHBpbw%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/gilangikoo/' }
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section__title">My Digistar Team</h2>
            <span className="section__subtitle">In Hard Skill Class Front End 3</span>

            <div className="services__container container grid">
                {teamMembers.map((member, index) => (
                    <div className="services__content" key={index}>
                        <div className="services__icon-container">
                            <img src={member.photo} alt={member.name} className="services__icon" />
                        </div>
                        <h3 className="services__title">{member.name}</h3>
                        <span className="services__button" onClick={() => toggleTab(index + 1)}>
                            View More
                            <HiOutlineArrowSmRight className="services__button-icon" />
                        </span>
                        <div className={toggleState === index + 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                                <h3 className="services__modal-title">{member.name}</h3>
                                <p className="services__modal-description">
                                    {member.university}
                                </p>
                                <ul className="services__modal-services"
                                    style={{
                                        display: "flex",
                                        gap: "2rem",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                    <li className="services__modal-service"
                                        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <a href={member.insta} target="_blank" rel="noopener noreferrer"
                                            style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "gray", textDecoration: "none" }}>
                                            <FaInstagram className="services__modal-icon" />
                                            <span className="services__modal-text">Instagram</span>
                                        </a>
                                    </li>
                                    <li className="services__modal-service"
                                        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                            style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "gray", textDecoration: "none" }}>
                                            <FaLinkedin className="services__modal-icon" />
                                            <span className="services__modal-text">LinkedIn</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
