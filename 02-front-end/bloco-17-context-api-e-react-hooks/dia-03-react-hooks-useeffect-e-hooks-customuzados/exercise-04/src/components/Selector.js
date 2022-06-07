import React, { useContext } from 'react';
import RedditContext from '../context/RedditContext';

const Selector = () => {
  const { 
    selectedSubreddit,
    availableSubreddits,
    selectSubreddit,
  } = useContext(RedditContext);

  return (
    <span>
      <h1>{`Selected: ${selectedSubreddit}`}</h1>
      <select 
        onChange={(e) => selectSubreddit(e.target.value)} 
        value={selectedSubreddit}
      >
        {availableSubreddits.map((item) => (
        <option value={ item } key={ item }>{ item }</option>
      ))}
      </select>
    </span>
  );
}

export default Selector;
