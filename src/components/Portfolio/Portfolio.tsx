const Portfolio = () => {
    return (
        <section id='summary' className='section bg-dark-1'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>PORTFOLIO</h2>
                    <h3 className='section-header'>My Work
                        <span className='heading-separator'></span>
                    </h3>
                </header>

                <section className="row">
                    <p className="introduction-paragraph">
                        <span>Explore My Digital Creations</span> Journey through my tech endeavors that showcases a blend of elegant design and intricate systems. Each project is a reflection of my commitment to creating meaningful digital experiences.
                    </p>

                    <ul>
                        <li className="project-wrapper">
                            <section className="left-section">
                                <img src="../../../public/project-screenshots/cinema-critic-screenshot.png" alt="" />
                            </section>
                            <section className="right-section">
                                <div className="logo-wrapper"><img src="../../../public/project-logos/cinema-critic-logo.png" alt="" /></div>
                                <h3>CinemaCritics</h3>
                                <p>A hub for movie and TV series enthusiasts, offering a well-organized and engaging platform to explore, discover, discuss and rate a wide array of movies and series. Visit Cinema Critic <a className="text-primary link" href="https://cinema-critics.web.app/">here</a> and be sure to register and leave a review for your favorite movie or series.</p>
                                
                                <h4>Technologies used:</h4>
                                <ul className="badges-wrapper">
                                    <li className="badge">JavaScript</li>
                                    <li className="badge">HTML</li>
                                    <li className="badge">CSS</li>
                                </ul>
                            </section>
                        </li>
                    </ul>


                </section>

            </div>
        </section>


    )
}

export default Portfolio;
