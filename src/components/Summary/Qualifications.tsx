const Qualifications = () => {
    return (
        <section id='summary' className='section bg-dark-1'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>QUALIFICATIONS</h2>
                    <h3 className='section-header'>My Journey
                        <span className='heading-separator'></span>
                    </h3>
                </header>
                <section className="row upper-section">
                    <article className="half-row-column">
                        <h2>Education</h2>
                        <ul>
                            <li className="bg-dark summary-box">
                                <div className="badge">2013 - 2017</div>
                                <h3>Banking and Economics</h3>
                                <p className="text-primary">Old Capital High School of Economics</p>
                                <p>Gained vital analytical and mathematical skills during my high school economics education, enhancing my tech abilities.</p>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </article>

                    <article className="half-row-column">
                        <h2>Experience</h2>
                        <ul>
                            <li className="bg-dark summary-box">Banking and accounting</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </article>

                </section>
                <hr />
                <section className="row bottom-section">
                    <h2>My Skills</h2>
                    <ul className="row">
                        Languages...
                    </ul>
                    <a href="#" className="btn">Download CV <i className="fas fa-download"></i></a>

                </section>
            </div>


        </section>
    )
}

export default Qualifications;
