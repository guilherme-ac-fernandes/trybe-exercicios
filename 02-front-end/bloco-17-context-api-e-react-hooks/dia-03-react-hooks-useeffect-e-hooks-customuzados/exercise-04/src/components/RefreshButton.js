import React, { useContext } from "react";
import RedditContext from "../context/RedditContext";

const RefreshButton = () => {
  const { isFetching, refreshSubreddit } = useContext(RedditContext);

  if (isFetching) return null;

  return (
    <button 
      type="button" 
      onClick={ (event) => refreshSubreddit(event) } 
      disabled={ isFetching }
    >
      Refresh
    </button>
  );
}

export default RefreshButton;
