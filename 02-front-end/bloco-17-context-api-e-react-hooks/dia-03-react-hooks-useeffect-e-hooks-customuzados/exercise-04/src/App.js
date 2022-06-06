import React, { useEffect, useContext } from 'react';
import LastUpdate from './components/LastUpdate';
import Posts from './components/Posts';
import RefreshButton from './components/RefreshButton';
import Selector from './components/Selector';
import RedditContext from './context/RedditContext';

// Resolução proveniente do gabarito presente no course da Trybe
// source: https://app.betrybe.com/course/front-end/context-api-e-react-hooks/react-hooks-useeffect-e-hooks-customizados/solutions/87be6ca9-8866-44c6-ba8f-70d6a452fceb/conteudo/e9b5268d-e6d8-4ae8-9666-fe3da7688e5f?use_case=calendar
const App = () => {
  const { 
    fetchPosts, 
    selectedSubreddit, 
    postsBySubreddit, 
    isFetching 
  } = useContext(RedditContext);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];

  const isEmpty = posts.length === 0;

  return (
    <div>
      <Selector />
      <div>
        <RefreshButton />
        <LastUpdate />
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );
}

export default App;
