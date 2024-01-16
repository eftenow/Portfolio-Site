import titles from "./../../data/titles.json";
import servicesData from "./../../data/servicesData.json";

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
                            {servicesData.cards.map((card, index) => (
                                <li key={index} className='half-row-column service-box'>
                                    <div className='service-box-icon-wrapper bg-dark-1'>
                                        <i className={card.icon}></i>
                                    </div>
                                    <article>
                                        <h3 className='service-title'>{card.title}</h3>
                                        <p className='service-text'>{card.description}</p>
                                    </article>
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>
            </div>
        </section>
    )
}

export default Services
