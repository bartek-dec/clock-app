import {useRef} from "react";
import {Advice, Hero, MoreInfo} from './components';

function App() {
    const wrapperRef = useRef(null);

    const toggleMoreInfo = () => {
        wrapperRef.current.classList.toggle('transform');
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
