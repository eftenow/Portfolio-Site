
export const Navigation = ({currentSection}) => {


    return (
        <header className="header left-section">
            <nav className="primary-menu navbar-expand bg-dark">
                <div className="side-nav-top">
                    <div className="avatar-container"><img src="../public/images/resume-pic.jpg" alt="profile" /></div>
                    <h2 className="name">Tsvetan Eftenov</h2>
                </div>

                <div className="side-nav-mid">
                    <ul className="navbar-list">
                        <li  className="nav-item"><a className={`nav-link ${currentSection == "home" && "text-primary"}`} href="#home"><i className="uil uil-estate"></i> Home</a></li>
                        <li className="nav-item"><a className={`nav-link ${currentSection == "about" && "text-primary"}`} href="#about"><i className="uil uil-user"></i> About</a></li>
                        <li className="nav-item"><a className={`nav-link ${currentSection == "services" && "text-primary"}`} href="#services"><i className="fa-regular fa-folder"></i> Services</a></li>
                        <li className="nav-item"><a className={`nav-link ${currentSection == "experience" && "text-primary"}`} href="#experience"><i className="uil uil-file-alt"></i> Experience</a></li>
                        <li className="nav-item"><a className={`nav-link ${currentSection == "tools" && "text-primary"}`} href="#tools"><i className="fa-solid fa-screwdriver-wrench"></i> Tools</a></li>
                        <li className="nav-item"><a className={`nav-link ${currentSection == "portfolio" && "text-primary"}`} href="#portfolio"><i className="fa-regular fa-address-card"></i> Portfolio</a></li>
                        <li className="nav-item"><a className={`nav-link ${currentSection == "contact" && "text-primary"}`} href="#contact"><i className="fa-regular fa-envelope"></i> Contact</a></li>
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