import Header from './components/Header';
import './app.css';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [gamesList, setGamesList] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header name="WildGamingWebSuperSite" />
          <Routes>
            <Route path="/" element={<GameList gamesList={gamesList} setGamesList={setGamesList} />}/>
            <Route path="/game/:id" exact element={<GameDetails />}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
