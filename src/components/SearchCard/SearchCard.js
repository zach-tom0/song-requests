import classes from "./SearchCard.module.css";
import data from "../../resources/data";
import { BallTriangle } from "react-loading-icons";
import { useState, useRef } from "react";

const SearchCard = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const searchInputValue = useRef();

  const showResults = () => {
    if (searchInputValue.current.value === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
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
        {data.length < 1 ? (
          <BallTriangle stroke="#0a3d0371" />
        ) : (
          <ul>
            <li>
              <h2>hello</h2>
            </li>
            {data.map((item) => (
              <li>
                <div>
                  <h2>{item.player}</h2>
                </div>
                <div>
                  <h3>{item.song}</h3>
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
