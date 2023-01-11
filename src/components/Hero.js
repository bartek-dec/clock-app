import React from 'react';
import sun from '../images/desktop/icon-sun.svg';
import moon from '../images/desktop/icon-moon.svg';
import arrow from '../images/desktop/icon-arrow-down.svg';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='heading-container'>
                    <img src={sun} alt='icon' className='heading-img'/>
                    <h3 className='greeting'>good afternoon</h3>
                </div>
                <h1 className='time'>11:37 <span>bst</span></h1>
                <h3 className='location'>in london, uk</h3>
            </div>
            <div className='btn-container'>
                <p className='btn-container-text'>more</p>
                <button type='button' className='more-btn'>
                    <img src={arrow} alt='arrow' className='more-btn-img'/>
                </button>
            </div>
        </section>
    );
};

export default Hero;