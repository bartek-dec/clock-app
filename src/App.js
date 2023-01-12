import {useRef} from "react";
import {setIsClosed} from "./features/moreBtn/moreBtnSlice";
import {useDispatch, useSelector} from "react-redux";
import {Advice, Hero, MoreInfo} from './components';

function App() {
    const wrapperRef = useRef(null);
    const dispatch = useDispatch();
    const {daytime} = useSelector((state) => state.greeting);

    const toggleMoreInfo = () => {
        wrapperRef.current.classList.toggle('transform');
        dispatch(setIsClosed());
    }

    return (
        <main className={`background ${daytime}-background`}>
            <div className='wrapper' ref={wrapperRef}>
                <Advice/>
                <Hero handleClick={toggleMoreInfo}/>
                <MoreInfo/>
            </div>
        </main>
    );
}

export default App;
