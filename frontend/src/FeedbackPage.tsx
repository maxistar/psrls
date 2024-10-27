import {PageProps} from "./PageProps";


const Feedback: React.FC<PageProps>  = ({ handlePageSelect }) => {
    return (
        <>
            <h2>Rate the Adventure!</h2>
            
            <p>Tell us what you think about the tour. Your feedback would be really appreciated!</p>
            
            <p>
                <textarea className="feedbackField">
                    
                </textarea>
            </p>
            
            <p className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('start')}>0.01 Ton</button>
                <button className="mode-button" onClick={() => handlePageSelect('start')}>0.1 TON</button>
                <button className="mode-button" onClick={() => handlePageSelect('start')}>Any Amount</button>
            </p>
            <p>
                <button onClick={() => handlePageSelect('start')}>No Tip</button>
            </p>

        </>
    )
}

export default Feedback;
