import { useState, useEffect } from "react";

export const Home = () => {
    const [messages, setMessages] = useState<string[]>(['Tsvetan Eftenov.', 'a Web Developer.']);
    const [currentMessage, setCurrentMessage] = useState<string>(messages[0]);

    useEffect(() => {
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;


        const rotateText = () => {
            setCurrentMessage((prevMessage) => {
                if (isDeleting) {
                    charIndex = Math.max(0, charIndex - 1);
                } else {
                    charIndex = Math.min(messages[messageIndex].length, charIndex + 1);
                }

                if (charIndex === 0 && isDeleting) {
                    messageIndex = (messageIndex + 1) % messages.length;
                    isDeleting = false;
                } else if (charIndex === messages[messageIndex].length && !isDeleting) {
                    setTimeout(() => {
                        isDeleting = true;
                    }, 1200);
                }

                return messages[messageIndex].substring(0, charIndex);
            });
        };

        const intervalId = setInterval(rotateText, 155);

        return () => clearInterval(intervalId);
    }, [messages]);

    return (
        <section className="home">
            <div className="home-wrapper">
                <div className="home-mask"></div>
                <div className="home-background"></div>
                <div className="home-content">
                    <section className="home-text">
                        <h2>Welcome</h2>
                        <h1>I am {currentMessage}<span className="cursor">|</span></h1>
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
