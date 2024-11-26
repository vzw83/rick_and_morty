import {Dispatch} from "redux";
import {characterApi} from "../api/api";
import {CharacterResponse, CharacterType, Gender, Species, Status} from "../utils/types";


const initialState: CharacterResponse = {
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    },
    results: []
}
export const charactersAllResponseReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-CHARACTERS-RESPONSE":
            return action.characters
        default:
            return state
    }
}


export const getCharactersAllResAC = (characters: CharacterResponse) => ({
    type: 'GET-CHARACTERS-RESPONSE',
    characters
} as const)




export const fetchCharactersAllResponseTC = (page: number, status: string, gender: string, species: string, name: string) => (dispatch: ThunkDispatch) => {
    characterApi.getCharacters(page, status, gender, species, name)
        .then((res) => {
            dispatch(getCharactersAllResAC(res.data))
        })

}






type setCharacters = ReturnType<typeof getCharactersAllResAC>



type ActionsType = setCharacters

type ThunkDispatch = Dispatch<ActionsType>