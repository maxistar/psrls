import {PageProps} from "./PageProps";


const Feedback: React.FC<PageProps>  = ({ handlePageSelect }) => {
    return (
        <>
            <h2>Rate this Adventure!</h2>
            
            <p>We'd love to hear your thoughts on the tour. Your feedback would be greatly appreciated!</p>
            
            <p>
                <textarea className="feedbackField">
                    
                </textarea>
            </p>
            
            <p className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('start')}>0.1 Ton</button>
                <button className="mode-button" onClick={() => handlePageSelect('start')}>0.2 TON</button>
                <button className="mode-button" onClick={() => handlePageSelect('start')}>0.5 TON</button>
            </p>
            <p>
                <button onClick={() => handlePageSelect('start')}>No Tip</button>
            </p>

        </>
    )
}

export default Feedback;
