import { MouseEvent, useState } from 'react'

const PortfolioItem = ({name, img, logo, link, description, technologies, visit}) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = (e:MouseEvent) => {
        e.preventDefault();
        setSelected(currentSelection => !currentSelection);
    }

    return (
        <li className="project-info bg-dark">
            <a href={link} className={`project-image ${!selected && 'hidden'}`}>
                <img src={img} alt='' />
            </a>

            <div className="project-title bg-dark">
                <button onClick={toggleSelected} className="show-more-btn">
                    <h3>{name}</h3> {selected ? <i className="fa-solid fa-angles-down less-icon"></i> : <i className="fa-solid fa-angles-up more-icon"></i> }
                </button>
            </div>

            <section className="project-data bg-dark">
                <p>{description}</p>
                <p>{visit} <a className='text-primary link' href={link}>here.</a></p>
                <h4>Technologies used:</h4>
                <ul className="badges-wrapper">
                    {technologies.map(x => <li className="badge">{x}</li>)}
                    
                </ul>
            </section>
        </li>
    )
}

export default PortfolioItem
