

const Guide = ({ handlePageSelect }) => {
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
