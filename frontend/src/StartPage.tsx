import './StartPage.css';
import {PageProps} from "./PageProps";
import startPageImage  from "./assets/mapIimage.png";

const StartPage: React.FC<PageProps> = ({ handlePageSelect }) => {
    
    return (
        <>
            <h1>Guided Adventures</h1>
            <p className="read-the-docs">
                Your Adventure starts right here...
            </p>
            <div className="mode-buttons">
                <button className="mode-button" onClick={() => handlePageSelect('select')}>Select a Tour</button>
            </div>
            <div className="imageContainer">
                <img className="logoimage" src={ startPageImage } alt="Start page image" />
            </div>
        </>
    );
    
}

export default StartPage;
