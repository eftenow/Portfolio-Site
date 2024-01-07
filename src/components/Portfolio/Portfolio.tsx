import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import PortfolioItem from "./PortfolioItem";
import portfolioData from "./../../data/portfolioData.json";

const Portfolio = () => {

    const sliderSettings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='portfolio' className='section bg-dark-1'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>PORTFOLIO</h2>
                    <h3 className='section-header'>My Work
                        <span className='heading-separator'></span>
                    </h3>
                </header>

                <section className="row portfolio-section">
                    <div className="slide-container">
                        <div className="slide-content">
                            <Slider {...sliderSettings}>
                                {portfolioData.map(projectData => (
                                    <div className="card-wrapper">
                                        <PortfolioItem {...projectData} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
            </div >
        </section >
    )
}

export default Portfolio;
