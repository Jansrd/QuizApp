import { useState } from 'react';
import './style/App.css';
import Quiz from './Quiz';
import Home from './Home';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false)

  return (
    <div className="app">
        {
            isQuizStarted ? (
                <Quiz retry={() => setIsQuizStarted(false)} />
            ) : (
                <Home start={() => setIsQuizStarted(true)} />
            )
        }
    </div>
  );
}

export default App;
