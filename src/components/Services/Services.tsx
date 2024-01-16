import titles from "./../../data/titles.json";

const Services = () => {
    return (
        <section id='services' className='section bg-dark-2'>
            <div className="container">
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>{titles.services.title}</h2>
                    <h3 className='section-header'>{titles.services.subtitle}
                        <span className='heading-separator'></span>
                    </h3>
                </header>

                <section className='row'>
                    <p className="introduction-paragraph">
                        <span><span>Explore my craft</span></span>Embark on a journey through my digital craftsmanship, where technology meets creativity. Below are the realms of my expertise:
                    </p>
                    <div className='wide-column'>
                        <ul className="row">
                            {/* <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                <i className="fa-solid fa-code"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>Full-Stack Web Development</h3>
                                    <p className='service-text'>Providing complete web solutions from initial concept to final launch, using modern technologies.</p>
                                </article>
                            </li> */}
                            <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>Front-End Development</h3>
                                    <p className='service-text'>Specializing in creating responsive and engaging user interfaces with JavaScript, React, and Svelte.</p>
                                </article>
                            </li>

                            <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                    <i className="fa-solid fa-server"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>Back-End Development</h3>
                                    <p className='service-text'>Expertise in NodeJS and Python to build efficient, scalable server-side applications for diverse needs.</p>
                                </article>
                            </li>

                            <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                    <i className="fa-solid fa-gears"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>API Development & Integration</h3>
                                    <p className='service-text'>Developing and integrating custom APIs to enhance and streamline web application functionalities.</p>
                                </article>
                            </li>

                            <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                    <i className="fa-solid fa-database"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>Database Management</h3>
                                    <p className='service-text'>Designing and optimizing databases to elevate your data systems for peak efficiency and performance.</p>
                                </article>
                            </li>


                            <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                    <i className="fa-solid fa-palette"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>Responsive Web Design</h3>
                                    <p className='service-text'>Designing visually appealing and functional websites that provide a seamless experience across all devices.</p>
                                </article>
                            </li>


                            <li className='half-row-column service-box'>
                                <div className='service-box-icon-wrapper bg-dark-1'>
                                    <i className="fa-solid fa-code-branch"></i>
                                </div>
                                <article>
                                    <h3 className='service-title'>Version Control & Project Management</h3>
                                    <p className='service-text'>Utilizing Git and Jira for effective project management, ensuring smooth team collaboration.</p>
                                </article>
                            </li>
                        </ul>


                    </div>
                </section>
            </div>
        </section>
    )
}

export default Services
