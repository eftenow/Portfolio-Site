interface PortfolioListItem {
    "name": string,
    "img": string,
    "logo": string,
    "link": string,
    "description": string,
    "technologies": string[],
    "visit": string,
}

const PortfolioItem = ({ name, img, logo, link, description, technologies, visit } :PortfolioListItem) => {
    return (
        <div className="card">
            <img src={img} alt="" className="card-img" />
            <div className="card-content">
                <h2 className="project-name">{name}</h2>
                <p className="project-descritpion">{description}</p>
                <p className='project-visit'>{visit}</p>

                <a href={link} className="btn-primary btn visit-btn">Visit</a>
            </div>
        </div>
    )
}

export default PortfolioItem
