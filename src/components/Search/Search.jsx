import React from "react";
import SearchIcon from "../icons/SearchIcon";
import './Search.scss'

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search for your preffered city..."/>
      <SearchIcon className="search__icon" />
    </div>
  )
}

export default Search;
