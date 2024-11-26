import {Dispatch} from "redux";
import {characterApi} from "../api/api";
import {EpisodesType} from "../utils/types";


const initialState: EpisodesType = {
    id: 1,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
    created: ''
}
export const episodesReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-EPISODES":
            return action.episodes
        default:
            return state
    }
}


export const getEpisodesAC = (episodes: EpisodesType) => ({
    type: 'GET-EPISODES',
    episodes
})

export const fetchEpisodesTC = (episode: number | null) => {
    const episodeNumber = episode ?? 1

    // if (episode === null) {
    //     episode = 1
    // }
    return (dispatch: ThunkDispatch) => {

        characterApi.getEpisodes(episodeNumber)
            .then((res) => {
                dispatch(getEpisodesAC(res.data))
            })
            .catch((err) => {
                // alert("Error fetching episodes", err)
            })
    }
}

type setCharacters = ReturnType<typeof getEpisodesAC>
type ActionsType = setCharacters

type ThunkDispatch = Dispatch<ActionsType>