import { useState } from "react";

import qualificationsData from "./../../data/qualificationsData.json";
import titles from "./../../data/titles.json";
import buttons from "./../../data/buttons.json";

const Qualifications = () => {
    const [activeSection, setActiveSection] = useState('education');

    const handleEducationClick = () => {
        setActiveSection('education');
    };

    const handleWorkClick = () => {
        setActiveSection('work');
    };

    return (
        <section id='experience' className='section bg-dark-1'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>{titles.qualifications.title}</h2>
                    <h3 className='section-header'>{titles.qualifications.subtitle}
                        <span className='heading-separator'></span>
                    </h3>
                </header>

                <p className="introduction-paragraph qual-paragraph">
                    <span>{qualificationsData.introTitle}</span> {qualificationsData.introParagraph}
                </p>

                <section className="qualification-btns">
                    <button className={`qualification-btn ${activeSection === 'education' ? 'qualification-active' : ''}`}
                        onClick={handleEducationClick}>
                        <i className="fa-solid fa-graduation-cap qualification-icon"></i>
                        Education
                    </button>

                    <button className={`qualification-btn ${activeSection === 'work' ? 'qualification-active' : ''}`}
                        onClick={handleWorkClick}>
                        <i className="fa-solid fa-briefcase qualification-icon"></i>
                        Work experience
                    </button>
                </section>

                <ul className={`qualification-content ${activeSection === 'education' ? 'qualification-active' : ''}`} data-content id="education">
                    {qualificationsData.education.map((card, index) => (
                        <li key={(index)} className="qualification-data">
                            {index % 2 != 0 && <>
                                <div></div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div></>}
                            <article className="qualification-box">
                                <h4>{card.title}</h4>
                                <p>{card.subtitle}</p>
                                <div className="qualification-calendar">
                                    <i className="fa-regular fa-calendar"></i>
                                    {card.years}
                                </div>
                            </article>

                            {index % 2 == 0 &&
                                <div>
                                    <span className="qualification-rounder"></span>
                                    
                                    {index < qualificationsData.education.length - 1 &&
                                    <span className="qualification-line"></span>}
                                </div>}
                        </li>
                    ))}
                </ul>

                <ul className={`qualification-content ${activeSection === 'work' ? 'qualification-active' : ''}`} data-content id="work">
                {qualificationsData.work.map((card, index) => (
                        <li key={(index)} className="qualification-data">
                            {index % 2 != 0 && <>
                                <div></div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div></>}
                            <article className="qualification-box">
                                <h4>{card.title}</h4>
                                <p>{card.subtitle}</p>
                                <div className="qualification-calendar">
                                    <i className="fa-regular fa-calendar"></i>
                                    {card.years}
                                </div>
                            </article>

                            {index % 2 == 0 &&
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>}
                        </li>
                    ))}
                </ul>

                <div className="cv-btn-wrapper">
                    <a href={buttons.cv} className='btn btn-primary' rel="noreferrer" target="_blank">
                        {buttons.download} <i className="fa-solid fa-download"></i>
                    </a>
                </div>
            </div>


        </section>
    )
}

export default Qualifications;
