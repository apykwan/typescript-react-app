// import React from 'react'

// const Actions = () => {

//     const toggleFavAction = (episode: IEpisode): void => {
//         const findDuplicateFavItem = favorites.findIndex((fav: IEpisode) => fav.id === episode.id);
    
//         if (findDuplicateFavItem !== -1) {
//             dispatch({
//               type: 'REMOVE_FAV',
//               payload: episode.id
//             });
//             return;
//         }
    
//         dispatch({
//           type: 'ADD_FAV',
//           payload: episode
//         });
//     };
 
// }

// export default Actions