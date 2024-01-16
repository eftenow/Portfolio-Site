import titles from "./../../data/titles.json";
import toolsData from "./../../data/toolsData.json";

const Tools = () => {
    return (
        <section id='tools' className='section bg-dark-2'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>{titles.tools.title}</h2>
                    <h3 className='section-header'>{titles.tools.subtitle}
                        <span className='heading-separator'></span>
                    </h3>
                </header>


                <section className="row skills-section">
                    <p className="introduction-paragraph"><span>{toolsData.introTitle}</span> {toolsData.introParagraph}</p>
                    <ul className="skill-box-wrapper row">
                        {toolsData.cards.map((card, index) => (
                            <li key={index} className="skill-box bg-dark">
                                <i className={card.icon}></i>
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                            </li>))}
                    </ul>

                </section>
            </div>
        </section>


    )
}

export default Tools;
