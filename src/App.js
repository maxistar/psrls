import './App.css';
import Counter from "./Counter";
import Header from "./Header";
import {useEffect} from "react";

function App() {
  useEffect(() => {
      const tg = window.Telegram.WebApp;
      tg.ready();
  }, []);
    
  return (
    <div className="App">
        <Header></Header>
        <Counter></Counter>
    </div>
  );
}



export default App;
