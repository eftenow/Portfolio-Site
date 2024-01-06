import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const iconsRef = useRef<(HTMLLIElement | null)[]>([]);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            iconsRef.current.forEach((icon, index) => {
                setTimeout(() => {
                    icon?.classList.add('in-view');
                }, index * 200);
            });
        }
    }, [inView]);

    return (
        <footer id='footer' className='footer-dark bg-dark-1' ref={ref}>
            <h3>Follow me</h3>
            <ul className="social-links">

                <li ref={el => iconsRef.current[0] = el} className='media-link github'>
                    <div className='animate_fade'>
                        <a href="https://github.com/eftenow" className="media-icon"><i className="fa-brands fa-github"></i></a>
                    </div>
                </li>
                <li ref={el => iconsRef.current[1] = el} className='media-link gitlab'>
                    <div className='animate_fade'>
                        <a href="https://gitlab.com/eftenow" className="media-icon"><i className="fa-brands fa-gitlab"></i></a>
                    </div>
                </li>

                <li ref={el => iconsRef.current[2] = el} className='media-link facebook'>
                    <div className='animate_fade'>
                        <a href="#" className="media-icon"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </li>


                <li ref={el => iconsRef.current[3] = el} className='media-link linkedin' >
                    <div className='animate_fade'>
                        <a href="https://www.linkedin.com/in/tsvetan-eftenov/" className="media-icon"><i className="uil uil-linkedin"></i></a>
                    </div>
                </li>

                <li ref={el => iconsRef.current[4] = el} className='media-link message'>
                    <div className='animate_fade'>
                        <a href="mailto:tsvetan.eftenov@gmail.com" className="media-icon">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
