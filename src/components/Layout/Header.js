import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className={classes.header}>
            <Link to='/'>
                <h2>Request a Song</h2>
            </Link>
        </header>
    )
    
}

export default Header;