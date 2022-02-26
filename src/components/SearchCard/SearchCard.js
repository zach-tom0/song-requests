import classes from "./SearchCard.module.css";
import { TailSpin } from "react-loading-icons";
import SongCard from "../SongCard/SongCard";
import { useState, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const SearchCard = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));
  const [typingTimeout, setTypingTimeout] = useState();
  const [result, setResult] = useState([]);
  const searchInputValue = useRef();

  const showResults = () => {
    if (searchInputValue.current.value === "") {
      setResult([]);
      setIsSearching(false);
    } else {
      setIsSearching(true);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      setTypingTimeout(
        setTimeout(async () => {
          if (searchInputValue.current.value !== "") {
            axios
              .get("https://api.spotify.com/v1/search", {
                headers: {
                  Accept: "Application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token,
                },
                params: {
                  q: searchInputValue.current.value,
                  type: "track",
                  limit: 20,
                },
              })
              .then((res) => {
                console.log(res.data.tracks.items);
                setResult(res.data.tracks.items);
              })
              .catch((err) => {});
          }
        }, 1000)
      );
    }
  };
  return (
    <div className={classes.div}>
      <input
        className={classes.searchInput}
        placeholder="start typing to search..."
        onInput={showResults}
        ref={searchInputValue}
      ></input>
      <div className={isSearching ? classes.results : classes.noResults}>
        {result.length < 1 ? (
          <TailSpin speed={0.5} stroke="#0a3d0371" />
        ) : (
          <ul>
            {result.map((item) => (
              <li>
                <div>
                  <a
                    className={classes.a}
                    onClick={() => {
                      alert("queueing this song");
                    }}
                  >
                    <div className={classes.songCard}>
                      <SongCard
                        albumCover={item.album.images[0].url}
                        songname={item.name}
                        artist={item.artists[0].name}
                      />
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchCard;
