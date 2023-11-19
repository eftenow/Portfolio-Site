export const Home = () => {

    return (
        <section className="home">
            <div className="home-wrapper">
                <div className="home-mask"></div>
                <div className="home-background"></div>
                <div className="home-content">
                    <section className="home-text">
                        <h2>Welcome</h2>
                        <h1>I am Tsvetan Eftenov</h1>
                        <p>based in Veliko Tarnovo, Bulgaria</p>
                        <a href="#">Contact Me</a>
                    </section>
                </div>
            </div>
            <a href="#" className="scroll-down-arrow">
                <span className="animated">
                    <i className="uil uil-angle-down"></i>
                </span>
            </a>
        </section>
    )
}