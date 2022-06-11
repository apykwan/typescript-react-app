import { createContext, useReducer } from 'react';

import { IState, IAction, IEpisode } from './interfaces';

const initialState:IState = {
    episodes: [],
    favorites: []
};

export const Store = createContext<IState | any>(initialState);

function reducer(state:IState, action:IAction): IState {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state, 
                episodes: action.payload
            };
        case 'ADD_FAV':
            const updatedFavorites = [...state.favorites];
            return {
                ...state,
                favorites: [...updatedFavorites, action.payload]
            };
        case 'REMOVE_FAV':
            const filteredFavorites = state.favorites.filter((fav: IEpisode) => fav.id !== action.payload);

            return {
                ...state,
                favorites: filteredFavorites
            };
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return <Store.Provider value={{ state, dispatch }}>
        {props.children}
    </Store.Provider>
}