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
                <div className={`qualification-content ${activeSection === 'education' ? 'qualification-active' : ''}`} data-content id="education">
                    {/* QUALIFICATION 1 */}
                    <div className="qualification-data">
                        <div className="qualification-box">
                            <h4>Banking & Economics</h4>
                            <p>Professional High School of Economics</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2013 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    {/* QUALIFICATION 2 */}
                    <div className="qualification-data">
                        <div></div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>

                        <div >
                            <h4>Applied linguistics with English and IT</h4>
                            <p>Veliko Tarnovo University</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2017 - 2022
                            </div>
                        </div>
                    </div>

                    {/* QUALIFICATION 3 */}
                    <div className="qualification-data">

                        <div className="qualification-box">
                            <h4>Web Developement</h4>
                            <p>Software University</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification-rounder"></span>
                        </div>
                    </div>
                </div>

                {/* WORK */}
                <div className={`qualification-content ${activeSection === 'work' ? 'qualification-active' : ''}`} data-content id="work">
                    {/* WORK-QUALIFICATION 1 */}
                    <div className="qualification-data">
                        <div className="qualification-box">
                            <h4>Junior Web Developer</h4>
                            <p>ZestLabs</p>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar"></i>
                                2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            {/* <span className="qualification-line"></span> */}
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default Qualifications;
