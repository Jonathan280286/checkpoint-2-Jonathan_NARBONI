import './header.css';

const Header = ({name}) => {
    return (
        <div className="header">
            <h1>{name}</h1>
            <h3>Qui ne fonctionne pas!</h3>  
        </div>
    )
};

export default Header;
