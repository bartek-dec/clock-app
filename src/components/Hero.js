import sun from '../images/desktop/icon-sun.svg';
import moon from '../images/desktop/icon-moon.svg';
import {GoChevronDown} from 'react-icons/go';
import {useSelector, useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {getLocation} from "../features/location/locationSlice";
import {setHour, setGreeting, setDaytime} from '../features/greeting/greetingSlice';

const Hero = ({handleClick}) => {
    const {isClosed} = useSelector((state) => state.moreBtn);
    const {city, country, code, error} = useSelector((state) => state.location);
    const {greeting, daytime} = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    const date = new Date()
    const [currentHour, setCurrentHour] = useState(date.getHours());
    const [currentMinutes, setCurrentMinutes] = useState(date.getMinutes());

    const [size, setSize] = useState(window.innerWidth);

    const updateTime = () => {
        const newDate = new Date()
        setCurrentHour(newDate.getHours());
        setCurrentMinutes(newDate.getMinutes());
    }
    setInterval(updateTime, 1000);

    useEffect(() => {
        //dispatch(getLocation());
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(setHour(currentHour));
        dispatch(setGreeting());
        dispatch(setDaytime());
        // eslint-disable-next-line
    }, [currentMinutes]);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    });

    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='heading-container'>
                    <img src={daytime === 'day' ? sun : moon} alt='icon' className='heading-img'/>
                    <h3 className='greeting'>{size > 768 ? `${greeting}, it's currently` : greeting}</h3>
                </div>
                <h1 className='time'>{currentHour < 10 ? `0${currentHour}` : currentHour}:{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}
                    <span>{code}</span></h1>
                <h3 className='location'>{!error ? `in ${city}, ${country}` : ''}</h3>
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