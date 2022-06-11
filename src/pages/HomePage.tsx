import { 
    useContext, 
    useEffect, 
    useCallback, 
    Fragment, 
    lazy, 
    Suspense 
} from 'react';

import { Store } from '../store/Store';

const EpisodeList = lazy(() => import('../components/EpisodeList'));

const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;

const HomePage = () => {
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
        <Fragment>
             <section className="episode-layout">
                <Suspense fallback={<h3>loading...</h3>}>
                    <EpisodeList {...props} />
                </Suspense>
            </section>
        </Fragment>
    )
}

export default HomePage;