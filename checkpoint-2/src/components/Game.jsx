import './game.css';

const Game = (props) => {
    const { name, img, rating } = props;
    return (
        <div className="game">
            <img src={img} alt="game background" />
            <h1>{name}</h1>
            <h3>Rating : {rating}</h3>
        </div>
    )
};

export default Game;
