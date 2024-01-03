import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='section bg-dark-2'>
            <div className='container'>
                <header className='header-wrapper'>
                    <h2 className='section-background-header'>CONTACT</h2>
                    <h3 className='section-header'>Get In Touch
                        <span className='heading-separator'></span>
                    </h3>
                </header>
                    <section className='contact-me-content row'>
                        <ul className='address-info'>
                            <li className='call'>
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <h3>Call Me</h3>
                                    <p>088 4292 387</p>
                                </div>
                            </li>

                            <li className='email'>
                                <i className="fa-solid fa-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>tsvetan.eftenov@gmail.com</p>
                                </div>
                            </li>

                            <li className='location'>
                            <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h3>Location</h3>
                                    <p>Veliko Tarnovo, Bulgaria</p>
                                </div>
                            </li>
                        </ul>
                        <div className='form-wrapper'>
                            <h3>Message me</h3>
                            <form className='form-dark' id='contact-form'>
                                <input name='username' type="text" className='form-field' placeholder='Name' />
                                <input name='email' type="email" className='form-field' placeholder='Email' />
                                <textarea name='message' className='form-field' placeholder='Message'></textarea>
                                <button className='btn btn-primary'>Send</button>
                            </form>
                        </div>
                    </section>
            </div>
        </section>
    )
}

export default Contact
