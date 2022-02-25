import classes from "./SongCard.module.css";
import pizza from '../../resources/pizza.gif';

const SongCard = props => {
    return (
        <div className={classes.card}>
            <img className={classes.albumcover} src={props.albumCover} alt="pizza" width="100" height="100"/>
            <div className={classes.songinfo}>
                <p className={props.animate ? classes.songnameanimated : classes.songname}>{props.songname}</p>
                <p className={classes.artist}>{props.artist}</p>
            </div>
            
        </div>
    )

}

export default SongCard;