
export const Navigation = () => {
    return (
        <header className="header left-section">
            <nav className="primary-menu navbar-expand bg-dark">
                <div className="side-nav-top">
                    <div className="avatar-container"><img src="../public/images/resume-pic.jpg" alt="profile" /></div>
                    <h2 className="name">Tsvetan Eftenov</h2>
                </div>

                <div className="side-nav-mid">
                    <ul className="navbar-list">
                        <li className="nav-item"><a className='nav-link' href="#home"><i className="uil uil-estate"></i> Home</a></li>
                        <li className="nav-item"><a className='nav-link' href="#about"><i className="uil uil-user"></i> About</a></li>
                        <li className="nav-item"><a className='nav-link' href="#skills"><i className="uil uil-file-alt"></i> Skills</a></li>
                        <li className="nav-item"><a className='nav-link' href="#services"><i className="uil uil-file-alt"></i> Services</a></li>
                        <li className="nav-item"><a className='nav-link' href="#portfoilo"><i className="uil uil-scenery"></i> Portfolio</a></li>
                        <li className="nav-item"><a className='nav-link' href="#contact"><i className="uil uil-message"></i> Contact</a></li>
                    </ul>
                </div>

                <ul className="side-nav-bot">
                    <li><a href="https://github.com/" className="media-icon"><i className="uil uil-message"></i></a></li>
                    <li><a href="https://www.linkedin.com/" className="media-icon"><i className="uil uil-linkedin"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}