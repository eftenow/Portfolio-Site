export const Home = () => {

    return (
        <section className="home">
            <div className="home-wrapper">
                <div className="home-mask"></div>
                <div className="home-background"></div>
                <div className="home-content">
                    <section className="home-text">
                        <p>Welcome!</p>
                        <h2>I am...</h2>
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