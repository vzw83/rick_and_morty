
import {Dispatch} from "redux";
import {characterApi} from "../api/api";
import { LocationType } from "../utils/types";



let initialState: LocationType = {
    created: "",
    url: "",
    type: "",
    residents: [],
    dimension: "",
    name: "",
    id: 1
}
export const locationReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-LOCATION":
            return action.location
        default:
            return state
    }
}


export const getLocationAC = (location: LocationType) => ({
    type: 'GET-LOCATION',
    location
})

export const fetchLocationTC = (location: number | null) =>{
    const locationNumber = location ?? 1

    return (dispatch: ThunkDispatch) =>{
        characterApi.getLocation(locationNumber)
            .then((res)=> {
                dispatch(getLocationAC(res.data))
            })
    }
}

type setLocations = ReturnType<typeof getLocationAC>
type ActionsType = setLocations

type ThunkDispatch = Dispatch<ActionsType>