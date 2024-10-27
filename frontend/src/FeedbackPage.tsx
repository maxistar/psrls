import {PageProps} from "./PageProps";
import { useTonConnectUI } from "@tonconnect/ui-react";

const Feedback: React.FC<PageProps>  = ({ handlePageSelect }) => {
    const [tonConnectUI] = useTonConnectUI();

    const setTransaction = (amount: string) => {
        tonConnectUI.sendTransaction({
            validUntil: Math.round(Date.now() / 1000 + 5 * 60),
            messages: [{
                address: 'UQC0wM4wqHvpswRw3Xh06vjmAj15ftAK0hH8OLtS9prx5-Ud',
                amount: amount
            }]
        })
    }
    
    return (
        <>
            <h2>Rate this Adventure!</h2>
            
            <p>We'd love to hear your thoughts on the tour. Your feedback would be greatly appreciated!</p>
            
            <p>
                <textarea className="feedbackField">
                    
                </textarea>
            </p>
            
            <p className="mode-buttons">
                <button className="mode-button" onClick={() => setTransaction('1000000')}>0.1 Ton</button>
                <button className="mode-button" onClick={() => setTransaction('2000000')}>0.2 TON</button>
                <button className="mode-button" onClick={() => setTransaction('5000000')}>0.5 TON</button>
            </p>
            <p>
                <button onClick={() => handlePageSelect('start')}>No Tip</button>
            </p>

        </>
    )
}

export default Feedback;
