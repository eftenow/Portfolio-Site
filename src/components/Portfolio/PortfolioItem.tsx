import { MouseEvent, useState } from 'react'

const PortfolioItem = () => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = (e:MouseEvent) => {
        e.preventDefault();
        setSelected(currentSelection => !currentSelection);
    }

    return (
        <li className="project-info bg-dark">
            <a href="#" className={`project-image ${!selected && 'hidden'}`}>
                <img src='../../../public/project-screenshots/cinema-critic-screenshot.png' alt='' />
            </a>

            <div className="project-title bg-dark">
                <button onClick={toggleSelected} className="show-more-btn">
                    <h3>Cinema Critic</h3> {selected ? <i className="fa-solid fa-angles-down less-icon"></i> : <i className="fa-solid fa-angles-up more-icon"></i> }
                </button>
            </div>

            <section className="project-data bg-dark">
                <p>A hub for movie and TV series enthusiasts, offering a well-organized and engaging platform to explore, discover, discuss and rate a wide array of movies and series. Visit Cinema Critic <a className="text-primary link" href="https://cinema-critics.web.app/">here</a> and be sure to register and leave a review for your favorite movie or series.</p>

                <h4>Technologies used:</h4>
                <ul className="badges-wrapper">
                    <li className="badge">JavaScript</li>
                    <li className="badge">HTML</li>
                    <li className="badge">CSS</li>
                </ul>
            </section>
        </li>
    )
}

export default PortfolioItem
