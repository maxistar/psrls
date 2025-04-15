import { useState } from 'react';
import './App.css';
import StartPage from './StartPage';
import GuideSelector from "./GuideSelector.tsx";
import FeedbackPage from "./FeedbackPage";
import { TonConnectButton } from "@tonconnect/ui-react";

function App() {
    const [mode, setMode] = useState('start');

    const mapUrls = {
        'guide1': 'https://projects.maxistar.me/psrls/map_moekernstrase.html',
        'guide2': 'https://projects.maxistar.me/psrls/map_friedrischain.html',
        'guide3': 'https://projects.maxistar.me/psrls/map_alexanderplatz.html',
        'alteOper': 'path_to/map_alte_oper_frankfurt.html',
        'bethmannPark': 'path_to/map_bethmann_park.html',
        'bornheimMitte': 'path_to/map_bornheim_Mitte.html'
    };

    const handlePageSelect = (selectedMode: string) => {
        if (mapUrls[selectedMode]) {
            window.Telegram.WebApp.openLink(mapUrls[selectedMode]);
        } else {
            setMode(selectedMode);
        }
    };

    return (
        <>
            <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>AR Platform</span>
                <TonConnectButton />
            </header>
            {mode === 'start' && <StartPage handlePageSelect={handlePageSelect} />}
            {mode === 'select' && <GuideSelector handlePageSelect={handlePageSelect} />}
            {mode === 'feedback' && <FeedbackPage handlePageSelect={handlePageSelect} />}
        </>
    );
}

export default App;
