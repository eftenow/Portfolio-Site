import { useState, useEffect } from 'react';


const GetToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`get-to-top-btn ${isVisible ? 'is-visible' : ''}`}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
};

export default GetToTopButton;
