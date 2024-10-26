import './StartPage.css';
import {PageProps} from "./PageProps";

const StartPage: React.FC<PageProps> = ({ handlePageSelect }) => {
    
    return (
        <>
            <h1>Adventure Guide</h1>
            <p className="read-the-docs">
                Start your adventure right here...
            </p>
            <div className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('guide')}>Start!</button>
                <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Rate your Tour</button>
            </div>
        </>
    );
    
}

export default StartPage;
