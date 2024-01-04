import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' className='footer-dark bg-dark-1'>
            <h3>Follow me</h3>
            <ul className="social-links">

                <li className='media-link github'>
                    <div className='animate_fade'>
                        <a href="https://github.com/eftenow" className="media-icon"><i className="fa-brands fa-github"></i></a>
                    </div>
                </li>

                <li className='media-link facebook'>
                    <div className='animate_fade'>
                        <a href="#" className="media-icon"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </li>

                <li className='media-link gitlab'>
                    <div className='animate_fade'>
                        <a href="https://gitlab.com/eftenow" className="media-icon"><i className="fa-brands fa-gitlab"></i></a>
                    </div>
                </li>

                <li className='media-link linkedin'>
                    <div className='animate_fade'>
                        <a href="https://www.linkedin.com/" className="media-icon"><i className="uil uil-linkedin"></i></a>
                    </div>
                </li>

                <li className='media-link github'>
                    <div className='animate_fade'>
                        <a href="https://github.com/" className="media-icon"><i className="uil uil-message"></i></a>
                    </div>
                </li>



            </ul>
        </footer>
    )
}

export default Footer
