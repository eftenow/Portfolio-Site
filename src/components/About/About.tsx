import React from 'react'

const About = () => {
  return (
    <section id='about' className='section bg-dark-1'>
      <div className='container'>
      <header className='about-header-wrapper'>
        <h2 className='section-background-header'>ABOUT ME</h2>
        <h3 className='section-header'>Who am I?</h3>
      </header>
      <article className='row about-me-content'>
        <article className='about-me-text primary-column'>
          <h2>I'm <span className='text-primary '>Tsvetan Eftenov,</span> a Web Developer</h2>
          <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
        </article>

        <section className='about-me-info column'>
          <ul className='info-fields'>
              <li className='info-field'><span>Name: </span>Tsvetan Eftenov</li>
              <li className='info-field'><span>Email: </span>tsvetan.eftenov@gmail.com</li>
              <li className='info-field'><span>Age: </span>26</li>
              <li className='info-field'><span>From: </span>Veliko Tarnovo, Bulgaria</li>
          </ul>
          <a href="#" className='btn btn-primary'>Download CV</a>
        </section>
      </article>
      </div>
    </section>
  )
}

export default About
