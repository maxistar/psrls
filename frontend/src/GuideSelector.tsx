import {PageProps} from "./PageProps";


const GuideSelector: React.FC<PageProps> = ({ handlePageSelect }) => {
    return (
        <>
            <h2>Select Your Tour!</h2>

            <div className="guide">
                <h3>Möckernstraße 120 (we are here!)</h3>
                <div className="mode-buttons">
                    <button className="mode-button" onClick={() => handlePageSelect('guide1')}>Start</button>
                    <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                </div>
            </div>

            <div className="guide">
                <h3>EastSide Gallery</h3>
                <div className="mode-buttons">
                    <button className="mode-button" onClick={() => handlePageSelect('guide2')}>Start</button>
                    <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                </div>
            </div>

            <div className="guide">
                <h3>Alexander Platz</h3>
                <div className="mode-buttons">
                    <button className="mode-button" onClick={() => handlePageSelect('guide3')}>Start</button>
                    <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                </div>
            </div>


        </>
    )
}

export default GuideSelector;
