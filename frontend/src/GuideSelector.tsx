import React from 'react';
import {PageProps} from "./PageProps";

const GuideSelector: React.FC<PageProps> = ({ handlePageSelect }) => {
    return (
        <>
            <h2>Select Your Tour!</h2>
            <div className="guides-row">
                <div className="guide">
                    <h3>Möckernstraße</h3>
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
                    <h3>Alexanderplatz</h3>
                    <div className="mode-buttons">
                        <button className="mode-button" onClick={() => handlePageSelect('guide3')}>Start</button>
                        <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                    </div>
                </div>
            </div>
            <div className="guides-row">
                <div className="guide">
                    <h3>Alte Oper</h3>
                    <div className="mode-buttons">
                        <button className="mode-button" onClick={() => handlePageSelect('alteOper')}>Start</button>
                        <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                    </div>
                </div>

                <div className="guide">
                    <h3>Bethmann Park</h3>
                    <div className="mode-buttons">
                        <button className="mode-button" onClick={() => handlePageSelect('bethmannPark')}>Start</button>
                        <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                    </div>
                </div>

                <div className="guide">
                    <h3>Bornheim Mitte</h3>
                    <div className="mode-buttons">
                        <button className="mode-button" onClick={() => handlePageSelect('bornheimMitte')}>Start</button>
                        <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Feedback</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuideSelector;
