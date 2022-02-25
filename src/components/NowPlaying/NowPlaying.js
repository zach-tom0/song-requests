import classes from "./NowPlaying.module.css";
import SongCard from "../SongCard/SongCard";
import { useState } from 'react';

const NowPlaying = () => {

  const [nowPlaying, setNowPlaying] = useState(true); 

  return (
    <div className={classes.card}>
      <h2>Now Playing</h2>
      <div className={classes.nowplaying}>
        
        {nowPlaying ? <SongCard songname="placeholder" artist="placeholder" animate="true"/> : <h3>Choose a song to play</h3>}
      </div>
    </div>
  );
};

export default NowPlaying;
