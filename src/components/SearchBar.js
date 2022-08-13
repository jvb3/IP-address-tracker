import React from "react";
import ArrowIcon from "../images/icon-arrow.svg";
import LocationDetails from "./LocationDetails";
import OnMap from "./OnMap";

function SearchBar({
  handleInput,
  handleSubmit,
  ipData,
  coordinates,
  zoom,
  errorMsg,
}) {
  return (
    <div className="wrapper">
      <div className="search-bar">
        <div className="search-bar__bg-image">
          <div className="search-bar__title">IP Address Tracker</div>
          <form onSubmit={handleSubmit} className="search-bar__box">
            <input
              type="text"
              name="search"
              onChange={handleInput}
              className="search-bar__input"
              placeholder="Search IP address or domain"
            />
            <img
              className="search-bar__arrow-icon"
              src={ArrowIcon}
              alt="icon"
              onClick={handleSubmit}
            />
          </form>
        </div>

        <LocationDetails ipData={ipData} errorMsg={errorMsg} />
      </div>

      <OnMap ipData={ipData} coordinates={coordinates} zoom={zoom} />
    </div>
  );
}

export default SearchBar;
