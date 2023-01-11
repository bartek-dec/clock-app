import sun from '../images/desktop/icon-sun.svg';
import moon from '../images/desktop/icon-moon.svg';
import {useSelector} from "react-redux";
import {GoChevronDown} from 'react-icons/go';

const Hero = ({handleClick}) => {
    const {isClosed} = useSelector((state) => state.moreBtn);

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
                <p className='btn-container-text'>{isClosed ? 'more' : 'less'}</p>
                <button type='button' className={isClosed ? 'more-btn' : 'more-btn up'} onClick={handleClick}>
                    <GoChevronDown/>
                </button>
            </div>
        </section>
    );
};

export default Hero;