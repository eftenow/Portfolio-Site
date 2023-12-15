import { useState } from "react";

const Qualifications = () => {
    const [activeSection, setActiveSection] = useState('education');

    const handleEducationClick = () => {
        setActiveSection('education');
    };

    const handleWorkClick = () => {
        setActiveSection('work');
    };

    return (
        <section id='summary' className='section bg-dark-1'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>EXPERIENCE</h2>
                    <h3 className='section-header'>My Journey
                        <span className='heading-separator'></span>
                    </h3>
                </header>

                <p className="introduction-paragraph">
                    <span>Discover my journey</span> This section unveils the landmarks of my education and career, every step has been a crucial chapter in my story. Join me in exploring the key experiences that have sculpted my journey in the world of technology.
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

                {/* EDUCATION */}
                <ul className={`qualification-content ${activeSection === 'education' ? 'qualification-active' : ''}`} data-content id="education">
                    {/* QUALIFICATION 1 */}
                    <li className="qualification-data">
                        <article className="qualification-box">
                            <h4>Banking & Economics</h4>
                            <p>Professional High School of Economics</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2013 - 2017
                            </div>
                        </article>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </li>

                    {/* QUALIFICATION 2 */}
                    <li className="qualification-data">
                        <div></div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <article>
                            <h4>Applied linguistics with English and IT</h4>
                            <p>Veliko Tarnovo University</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2017 - 2022
                            </div>
                        </article>
                    </li>

                    {/* QUALIFICATION 3 */}
                    <li className="qualification-data">

                        <article className="qualification-box">
                            <h4>Web Developement</h4>
                            <p>Software University</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2022 - 2023
                            </div>
                        </article>
                        <div>
                            <span className="qualification-rounder"></span>
                        </div>
                    </li>
                </ul>

                {/* WORK */}
                <section className={`qualification-content ${activeSection === 'work' ? 'qualification-active' : ''}`} data-content id="work">
                    {/* WORK-QUALIFICATION 1 */}
                    <li className="qualification-data">
                        <article className="qualification-box">
                            <h4>Web Developer</h4>
                            <p>ZestLabs</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2023 - Present
                            </div>
                        </article>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </li>
                </section>

                <div className="cv-btn-wrapper">
                <button className="btn btn-outline-secondary">
                    Download CV <i className="fa-solid fa-download"></i>
                </button>
                </div>
            </div>


        </section>
    )
}

export default Qualifications;
