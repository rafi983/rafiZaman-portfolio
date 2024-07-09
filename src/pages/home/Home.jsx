import React from 'react';
import myImage from '../../assets/myImage.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={myImage} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Rafi Zaman.</span> Web Developer
          </h1>

          <p className='home__description'>
            I'm a front-end web developer. I have been soleley working on my applications.
            I mostly code on react. By now, I have developed many projects
            including react applications with full stack applications too.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
