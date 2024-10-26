import { useState } from 'react'
import './App.css'
import StartPage from './StartPage'
import Guide from "./Guide";
import FeedbackPage from "./FeedbackPage";

function App() {
    const [mode, setMode] = useState('start'); 
    
    const handlePageSelect = (selectedMode: string) => {
        if (selectedMode === 'guide') {
            window.Telegram.WebApp.openLink('https://projects.maxistar.me/psrls/map_moekerstrase.html')
        } else {
            setMode(selectedMode);
        }
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
