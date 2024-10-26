import { useState } from 'react'
import './App.css'
import { TonConnectUIProvider } from "@tonconnect/ui-react";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TonConnectUIProvider manifestUrl="https://https://projects.maxistar.me/psrls/tonconnect-manifest.json">

                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </TonConnectUIProvider>

        </>
    )
}

export default App
