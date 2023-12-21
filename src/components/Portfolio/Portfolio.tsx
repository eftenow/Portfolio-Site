import PortfolioItem from "./PortfolioItem";
import portfolioData from "./../../data/portfolioData.json";

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

                <section className="row portfolio-section">
                    <p className="introduction-paragraph">
                        <span>Explore My Digital Creations</span> Journey through my tech endeavors that showcases a blend of elegant design and intricate systems. Each project is a reflection of my commitment to creating meaningful digital experiences.
                    </p>

                    <ul className="project-list">
                        {portfolioData.map(projectData => <PortfolioItem {...projectData}/>)}
                    </ul>


                </section>

            </div>
        </section>


    )
}

export default Portfolio;
