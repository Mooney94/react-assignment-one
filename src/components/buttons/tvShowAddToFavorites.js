import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const TvShowsAddToFavoritesButton = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(tvShow.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default TvShowsAddToFavoritesButton;