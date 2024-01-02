import { MouseEvent, useState } from 'react'

const PortfolioItem = ({ name, img, logo, link, description, technologies, visit }) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = (e: MouseEvent) => {
        e.preventDefault();
        setSelected(currentSelection => !currentSelection);
    }

    return (
        <div className="card bg-dark">
            <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                    <img src={img} alt="" className="card-img" />
                </div>
            </div>
            <div className="card-content">
                <h2 className="name">{name}</h2>
                <p className="descritpion">{description}</p>
                <p className='visit'>{visit}</p>

                <button className="btn-primary btn visit-btn">Visit</button>
            </div>
        </div>
    )
}

export default PortfolioItem
