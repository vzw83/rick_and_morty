import axios from "axios";
import {CharacterResponse, CharacterType, EpisodesType, LocationsResponse, LocationType,} from "../utils/types";


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json'
    // }
})
export const characterApi = {
    getCharacters(page: number, status: string, gender: string, species: string, name: string) {
        // let url = `character/?page=${page}`;
        // if (status) url += `&status=${status}`;
        // if (gender) url += `&gender=${gender}`;
        // if (species) url += `&species=${species}`;
        // if (name) url += `&name=${name}`;
        // return instance.get<CharacterResponse>(url);
       return instance.get<CharacterResponse>(`character/?page=${page}&status=${status}&gender=${gender}&species=${species}&name=${name}`)
    },

    getLocations() {
        return instance.get<LocationsResponse>(`location`)
    },
    getLocation(location: number) {
        return instance.get<LocationType>(`location/${location}`)
    },
    getEpisodes(episode: number) {
        return instance.get<EpisodesType>(`episode/${episode}`)
    },
    getMultipleCharters(characters: Array<number>){
        return instance.get<CharacterType[]>(`character/${characters}`)
    },
    getStatusCharters(status:string, gender: string, species: string){
        return instance.get<CharacterResponse>(`character/?status=${status}&species=${species}&gender=${gender}`)
    },
}

