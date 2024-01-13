import { useState } from 'react';
import emailjs from 'emailjs-com';

import SECRETS from '../../secrets';

interface FormData {
    from_name: string;
    email: string;
    message: string;
  }
  
  interface FormErrors {
    from_name?: string;
    email?: string;
    message?: string;
  }

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        from_name: '',
        email: '',
        message: ''
    });
    const [showNotification, setShowNotification] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const tempErrors: FormErrors = {};
        if (!formData.from_name) tempErrors.from_name = 'Name is required';
        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is not valid';
        }
        if (!formData.message) tempErrors.message = 'Message is required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        emailjs.sendForm(SECRETS.EMAILJS_SERVICE_ID, SECRETS.EMAILJS_TEMPLATE_ID, e.target as HTMLFormElement, SECRETS.EMAILJS_USER_ID)
            .then(() => {
                setShowNotification(true);
                setFormData({ from_name: '', email: '', message: '' });
                setTimeout(() => setShowNotification(false), 3000);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                        <form onSubmit={sendEmail} className='form-dark' id='contact-form'>
                            <input
                                name='from_name'
                                type="text"
                                className='form-field'
                                placeholder='Name'
                                value={formData.from_name}
                                onChange={handleInputChange}
                            />
                            {errors.from_name && <p className="error">{errors.from_name}</p>}

                            <input
                                name='email'
                                type="text"
                                className='form-field'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <textarea
                                name='message'
                                className='form-field'
                                placeholder='Message'
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                            {errors.message && <p className="error">{errors.message}</p>}

                            <button type='submit' className='btn btn-primary'>Send</button>
                        </form>
                    </div>
                </section>
            </div>
            {showNotification && (
                <div className="notification-modal">
                    <h3>Thank you for your message!</h3>
                </div>
            )}
        </section>
    )
}

export default Contact
