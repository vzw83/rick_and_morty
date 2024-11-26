import {Dispatch} from "redux";
import {characterApi} from "../api/api";
import {CharacterType} from "../utils/types";
import {setLoading, setLoadingAC} from "./loading-reducer";


const initialState: CharacterType[] = []
export const charactersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-CHARACTERS":
            return action.characters
        case "GET-MULTIPLE":
            return action.characters
        case "GET-CHARACTERS-ALIVE":
            return action.characters
        case "GET-FILTER-PERSONS":
            return action.characters
        default:
            return state
    }
}


export const getCharactersAC = (characters: CharacterType[]) => ({
    type: 'GET-CHARACTERS',
    characters
} as const)

export const getMultipleChartersAC = (characters: CharacterType[]) => ({
    type: 'GET-MULTIPLE',
    characters
} as const)


export const getCharactersAliveAC = (characters: CharacterType[]) => ({
    type: 'GET-CHARACTERS-ALIVE',
    characters
} as const)

export const getFilterPersonsAC = (characters: CharacterType[]) => ({
    type: 'GET-FILTER-PERSONS',
    characters
} as const)


export const fetchCharactersTC = (currentPage: number, status: string,gender: string, species: string , name: string) => (dispatch: ThunkDispatch) => {
    dispatch(setLoadingAC(true))
    characterApi.getCharacters(currentPage, status, gender, species, name)
        .then((res) => {
            dispatch(getCharactersAC(res.data.results))
        })
        .catch((error)=>{
            console.error("Error fetching characters:", error)
        })
        .finally(()=>{
            dispatch(setLoadingAC(false))
        })
     }
export const fetchMultipleCharactersTC = (arr: Array<number>) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setLoadingAC(true))
        characterApi.getMultipleCharters(arr)
            .then((res) => {
                // console.log(res.data)
                dispatch(getMultipleChartersAC(res.data))
            })
            .catch((error)=>{
                console.error("Error fetching characters:", error)
            })
            .finally(()=>{
                dispatch(setLoadingAC(false))
            })
    }
}



// export const getFilterPersonsTC = (status: string, gender: string, species: string) => {
//     return (dispatch: ThunkDispatch) => {
//
//
//         characterApi.getStatusCharters(status,gender, species)
//             .then((res) => {
//                 dispatch(getMultipleChartersAC(res.data.results))
//             })
//     }
// }

type setCharacters = ReturnType<typeof getCharactersAC>
type getMultiple = ReturnType<typeof getMultipleChartersAC>
type getCharactersAlive = ReturnType<typeof getCharactersAliveAC>
type getFilterPersons = ReturnType<typeof getFilterPersonsAC>


type ActionsType = setCharacters | getMultiple  | getCharactersAlive | getFilterPersons | setLoading

type ThunkDispatch = Dispatch<ActionsType>