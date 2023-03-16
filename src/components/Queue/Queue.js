import classes from "./Queue.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import SongCard from "../SongCard/SongCard";

const Queue = () => {
  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("	https://api.spotify.com/v1/me/player/queue", {
          headers: {
            Accept: "Application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          setQueue(res.data.queue);
        })
        .catch((err) => {});
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.queue}>
      <h2>Queued Songs</h2>
      <div className={classes.queueList}>
        <div>
          <ul>
            {queue.map((item) => (
              <li>
                <SongCard
                  albumCover={item.album.images[0].url}
                  songname={item.name}
                  artist={item.artists[0].name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Queue;
