import './gameList.css';
import Game from './Game';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const GameList = ({ gamesList, setGamesList }) => {
    const [bestRating, setBestRating] = useState(false);

    useEffect(() => {
            axios
                .get(`https://apis.wilders.dev/wild-games/games/`)
                .then((res) => res.data)
                .then((data) => setGamesList(data))
    }, [setGamesList]);

    return (
        <div className="gamelist-div">
            <button type="button" id="rating-button" onClick={() => setBestRating(!bestRating)}>{!bestRating ? "Show only best ones" : "Show all"}</button>
            <div className="game-list">
                {gamesList && gamesList
                .filter((game) => bestRating ? game.rating >= 4.5 : game)
                .map((game, index) =>
                    <Link className="links" key={index} to={'/game/' + game.slug}>
                        <Game name={game.name} img={game.background_image} rating={game.rating} />
                    </Link>)}
            </div>
        </div>
    )
};

export default GameList;
