import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./search.css";

const SearchBar = ({ placeholder, data }) => {
  const [filterArray, setFilterArray] = useState([]);
  const [text, setText] = useState(null);

  const changeHandler = (event) => {
    const word = event.target.value;
    setText(word);
    const newArr = data.filter((val) =>
      val.title.toLowerCase().includes(word.toLowerCase())
    );
    setFilterArray(newArr);
  };
  const clear = () => {
    setText("");
  };
  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={changeHandler}
        />
        <div className="searchIcons">
          {" "}
          {text ? <CloseIcon id="clearBtn" onClick={clear} /> : <SearchIcon />}
        </div>
      </div>
      {text && (
        <div className="dataResults">
          {filterArray.map((ele, key) => {
            return (
              <a
                className="dataItem"
                href={ele.link}
                target="_blank"
                rel="noreferrer"
              >
                <p>{ele.title}</p>
              </a>
            );
          })}
          {filterArray.length === 0 && <p>No results found</p>}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
