import './gameDetails.css';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const GameDetails = () => {
    const slug = useParams();
    const [gameInfo, setGameInfo] = useState();

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/`)
            .then((res) => res.data)
            .then((data) => setGameInfo(data.find((game) => game.slug === slug.id)))
}, [slug.id, setGameInfo]);

gameInfo && console.log(gameInfo);

    return (
        <div className="game-details-div" style={gameInfo && { 
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url("${gameInfo.background_image}")` 
          }}>
            <Link className="links" to="/" >
                <div className="return">
                    Return
                </div>
            </Link>
            {gameInfo &&
            <div className="game-details"> 
            <h1>{gameInfo.name}</h1>
            <ReactPlayer
            className="video"
            url={gameInfo.clip.clip}
            volume={1}
            muted
            playing
            loop
          />
          <ul className="screenshots">
              {gameInfo && gameInfo.short_screenshots.map((screenshot, index) => <li key={index}><img src={screenshot.image} alt={`Screenshot of ${gameInfo.name}`} /></li>)}
          </ul>
          </div>
            }
        </div>
    )
};

export default GameDetails;
