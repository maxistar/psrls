import {PageProps} from "./PageProps";


const Guide: React.FC<PageProps> = ({ handlePageSelect }) => {
    return (
        <>
        guide
            <div className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('feedback')}>Start!</button>
            </div>
        </>
    )
}

export default Guide;
