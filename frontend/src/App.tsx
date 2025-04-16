import { useState } from 'react'
import './App.css'
import StartPage from './StartPage'
import GuideSelector from "./GuideSelector.tsx";
import FeedbackPage from "./FeedbackPage";
import {TonConnectButton} from "@tonconnect/ui-react";

function App() {
    const [mode, setMode] = useState('start'); 
    
    const handlePageSelect = (selectedMode: string) => {
        if (selectedMode === 'guide1') {
            window.Telegram.WebApp.openLink('https://projects.maxistar.me/psrls/map_moekernstrase.html')
        } else if (selectedMode === 'guide2') {
            window.Telegram.WebApp.openLink('https://projects.maxistar.me/psrls/map_friedrischain.html')
        } else if (selectedMode === 'guide3') {
            window.Telegram.WebApp.openLink('https://projects.maxistar.me/psrls/map_alexanderplatz.html')
        } else {
            setMode(selectedMode);
        }
    };

    return (
        <>
            <header style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>AR Platform</span>
                <TonConnectButton />
            </header>
            {mode==='start' ? (<StartPage handlePageSelect={ handlePageSelect }></StartPage>) : (<></>)}
            {mode==='select' ? (<GuideSelector handlePageSelect={ handlePageSelect }></GuideSelector>) : (<></>)}
            {mode==='feedback' ? (<FeedbackPage handlePageSelect={ handlePageSelect }></FeedbackPage>) : (<></>)}
        </>
    )
}

export default App
