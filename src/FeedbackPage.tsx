import {PageProps} from "./PageProps";


const Feedback: React.FC<PageProps>  = ({ handlePageSelect }) => {
    return (
        <>
            feedback
            <div className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('start')}>Start!</button>
            </div>

        </>
    )
}

export default Feedback;
