import {useRef} from "react";
import {Advice, Hero, MoreInfo} from './components';

function App() {
    return (
        <main className='background'>
            <Advice/>
            <Hero/>
            <MoreInfo/>
        </main>
    );
}

export default App;
