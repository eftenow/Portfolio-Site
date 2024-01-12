import React from 'react'

const About = () => {
  return (
    <section id='about' className='section bg-dark-1'>
      <div className='container'>
        <header className='header-wrapper'>
          <h2 className='section-background-header'>ABOUT ME</h2>
          <h3 className='section-header'>Who am I?
            <span className='heading-separator'></span>
          </h3>
        </header>
        <article className='row about-me-content'>
          <article className='about-me-text primary-column'>
            <h2>I'm <span className='text-primary '>Tsvetan Eftenov,</span> a Web Developer</h2>
            <p>In early 2022, I started my coding adventure and it's been a one-way journey ever since. Initially, I got into Python, driven by curiosity and passion I gradually expanded into JavaScript and front-end development as well.</p>
            <p>Dive into the vibrant world of Full-Stack Development with me, where coding isn't just typing on a keyboard, but a quest for innovation! Armed with NodeJS, Python, and React, I explore the digital world, reshaping complex challenges into engaging riddles.</p>
          </article>

          <section className='about-me-info column'>
            <ul className='info-fields'>
              <li className='info-field'><span>Name: </span>Tsvetan Eftenov</li>
              <li className='info-field'><span>Email: </span><span className='text-primary'>tsvetan.eftenov@gmail.com</span></li>
              <li className='info-field'><span>Age: </span>26</li>
              <li className='info-field'><span>From: </span>Veliko Tarnovo, Bulgaria</li>
            </ul>
            <a href="../../../public/files/tsvetan_eftenov_resume.pdf" className='btn btn-primary' rel="noreferrer">Download CV</a>
          </section>
        </article>
      </div>
    </section>
  )
}

export default About
