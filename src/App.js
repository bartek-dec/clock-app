import {useRef} from "react";
import {setIsClosed} from "./features/moreBtn/moreBtnSlice";
import {useDispatch} from "react-redux";
import {Advice, Hero, MoreInfo} from './components';

function App() {
    const wrapperRef = useRef(null);
    const dispatch = useDispatch();

    const toggleMoreInfo = () => {
        wrapperRef.current.classList.toggle('transform');
        dispatch(setIsClosed());
    }

    return (
        <main className='background'>
            <div className='wrapper' ref={wrapperRef}>
                <Advice/>
                <Hero handleClick={toggleMoreInfo}/>
                <MoreInfo/>
            </div>
        </main>
    );
}

export default App;
