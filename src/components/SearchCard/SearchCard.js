import classes from "./SearchCard.module.css";
import { TailSpin } from "react-loading-icons";
import SongCard from "../SongCard/SongCard";
import { useState, useRef, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import axios from "axios";

const SearchCard = (props) => {
  const [isSearching, setIsSearching] = useState(false);
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
            const result = await axios(
              "http://hn.algolia.com/api/v1/search?hitsPerPage=50&query=" +
                searchInputValue.current.value
            );
            setResult(result.data.hits);
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
        ) : (<>
          <ul>
            {result.map((item) => (
              <li>
                <div>
                  <a href={item.url}><SongCard songname={item.title}/></a>
                </div>
              </li>
            ))}
          </ul>
          <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          
          pageRangeDisplayed={5}
          
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
        </>
        )}
      </div>
    </div>
  );
};

export default SearchCard;
