import { Fragment } from 'react';
import { IEpisode, Episode } from '../interfaces';

export const EpisodeList = (props: Episode): JSX.Element => {
    const { episodes, dispatch, favorites } = props;

    const toggleFavAction = (episode: IEpisode): void => {
        const findDuplicateFavItem = favorites.findIndex((fav: IEpisode) => fav.id === episode.id);
    
        if (findDuplicateFavItem !== -1) {
            dispatch({
              type: 'REMOVE_FAV',
              payload: episode.id
            });
            return;
        }
    
        dispatch({
          type: 'ADD_FAV',
          payload: episode
        });
    };

    return (
        <Fragment>
            {episodes.map((episode: IEpisode):JSX.Element => (
                <div key={episode.id} className="episode-box">
                    {episode.image && <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`}/>}
                    <h4>{episode.name}</h4>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        Season: {episode.season} Number: {episode.number}
                        <button 
                            style={{ marginLeft: '0.5rem' }}
                            onClick={toggleFavAction.bind(null, episode)}
                        >
                            {favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'UnFav' : 'Fav'}
                        </button>
                    </section>
                </div>
            ))}
        </Fragment>   
    );
}

export default EpisodeList;