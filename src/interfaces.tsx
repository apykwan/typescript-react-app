import React from 'react';

export interface IEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image?: { medium: string };
    name: string;
    number: number;
    rating: { average: string };
    runtime: number;
    season: number;
    summary: string;
    type: string;
    url: string;
  }

export interface IState {
    episodes: IEpisode[],
    favorites: IEpisode[]
}

export type IAction = {
    type: string,
    payload: any
}

export interface Episode {
    episodes: IEpisode[];
    favorites: IEpisode[];
    dispatch: React.Dispatch<any>
}