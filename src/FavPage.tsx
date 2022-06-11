import { useContext, lazy, Suspense, Fragment } from 'react';
import { Redirect } from "@reach/router";

import { Store } from './Store';

const EpisodeList = lazy(() => import('./EpisodeList'));

const FavPage = ():JSX.Element => {
    const { state, dispatch } = useContext(Store);
    const props = {
        episodes: state.favorites,
        dispatch,
        favorites: state.favorites
    };

    return (
        <Fragment>
            {state.favorites.length > 0 ? (
                <section className="episode-layout">
                    <Suspense fallback={<h3>loading...</h3>}>
                        <EpisodeList {...props} />
                    </Suspense>
                </section>
            ) : (
                <Redirect to="/" />
            )}
        </Fragment>
    );
}

export default FavPage;