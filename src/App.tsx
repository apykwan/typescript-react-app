import { useContext, useEffect, useCallback, lazy, Suspense } from 'react';

import { Store } from './Store';
import './App.css';

const EpisodeList = lazy(() => import('./EpisodeList'));

const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;

function App():JSX.Element {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = useCallback(async() => {
    try {
      const data = await fetch(URL);
      const dataJSON = await data.json();
      return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes
      });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, [state.episodes, fetchDataAction]);

  const props = {
    episodes: state.episodes,
    dispatch,
    favorites: state.favorites
  };

  return (
    <div>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!</p>
        </div>
        <div>
          Favorite(s): {state.favorites.length}
        </div>
      </header>
      
      <section className="episode-layout">
        <Suspense fallback={<h3>loading...</h3>}>
          <EpisodeList {...props} />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
