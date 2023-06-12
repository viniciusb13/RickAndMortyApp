import Episode from '@/app/episodes/[id]/page';
import page from '@/app/page';
import { CharacterProps, Characters } from '@/interfaces/CharacterProps';
import { EpisodeProps, Episodes } from '@/interfaces/EpisodeProps';
import { LocationProps, Locations } from '@/interfaces/LocationProps';
import axios from 'axios'


const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const getAllCharacters = async (page: number) => {
    try {
        const { data } = await api.get<Characters>(`/character/?page=${page}`);
        return data;

    } catch(err) {
        console.error(err);
        return err
    }
}

export const getMultipleCharacters = async (ids: number[]) => {
    try {
        const { data } = await api.get<Characters>(`/character/${[ids]}`);
        return data;
    } catch(err) {
        console.error(err);
        return err
    }
}

export const getCharacter = async (id: number) => {
    try {
        const { data } = await api.get<CharacterProps>(`/character/${id}`)
        return data;
    } catch(err) {
        console.error(err);
        return err
    }
}

export const getAllLocations = async (page: number) => {
    const { data } = await api.get<LocationProps>(`/location?page=${page}`);
    return data;
}

export const getLocation = async (id: number) => {
    const { data } = await api.get<Locations>(`/location/${id}`)
    return data;
}

export const getAllEpisodes = async (page: number) => {
    const { data } = await api.get<EpisodeProps>(`/episode?page=${page}`);
    return data;
}

export const getMultipleEpisodes = async (ids: number[]) => {
    try {
        const { data } = await api.get<Episodes>(`/episode/${[ids]}`);
        return data;

    } catch(err) {
        console.error(err);
        return err
    }
}

export const getEpisode = async (id: number) => {
    const { data } = await api.get<Episodes>(`/episode/${id}`)
    return data;
}