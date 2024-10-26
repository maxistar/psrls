import { TonConnectButton } from "@tonconnect/ui-react";
import './StartPage.css';
import {PageProps} from "./PageProps";

const StartPage: React.FC<PageProps> = ({ handlePageSelect }) => {
    
    return (
        <>
            <header style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>AR platform</span>
                <TonConnectButton />
            </header>
            <h1>Adventure Guide</h1>
            <p className="read-the-docs">
                Start your adventure right here...
            </p>
            <div className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('guide')}>Start!</button>
            </div>
        </>
    );
    
}

export default StartPage;
