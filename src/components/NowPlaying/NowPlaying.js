import classes from "./NowPlaying.module.css";
import SongCard from "../SongCard/SongCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));
  const [songInfo, setSongInfo] = useState({
    songname: null,
    artist: null,
    albumCover: null,
  });

  useEffect(() => {
    axios
      .get("	https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Accept: "Application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setNowPlaying(true);
        setSongInfo({
          songname: res.data.item.name,
          artist: res.data.item.artists[0].name,
          albumCover: res.data.item.album.images[0].url,
        });
      })
      .catch((err) => {
        setNowPlaying(false);
      });
  }, []);

  return (
    <div className={classes.card}>
      <h2>Now Playing</h2>
      <div className={classes.nowplaying}>
        {nowPlaying ? (
          <SongCard
            albumCover={songInfo.albumCover}
            songname={songInfo.songname}
            artist={songInfo.artist}
            animate="true"
          />
        ) : (
          <h3>No Songs playing right now</h3>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
