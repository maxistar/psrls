import { useState } from 'react'
import './App.css'
import StartPage from './StartPage'
import Guide from "./Guide";
import FeedbackPage from "./FeedbackPage";

function App() {
    const [mode, setMode] = useState('start'); 
    
    const handlePageSelect = (selectedMode) => {
        setMode(selectedMode);
    };

    const handleReturnToMenu = () => {
        setMode(null); // Reset mode to null to go back to CoverPage
    };


    return (
        <>
            {mode==='start' ? (<StartPage handlePageSelect={ handlePageSelect }></StartPage>) : (<></>)}
            {mode==='guide' ? (<Guide handlePageSelect={ handlePageSelect }></Guide>) : (<></>)}
            {mode==='feedback' ? (<FeedbackPage handlePageSelect={ handlePageSelect }></FeedbackPage>) : (<></>)}
        </>
    )
}

export default App
