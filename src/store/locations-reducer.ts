import {Dispatch} from "redux";
import {characterApi} from "../api/api";
import {LocationsResponse} from "../utils/types";
import {setLoading, setLoadingAC} from "./loading-reducer";


let initialState: LocationsResponse = {
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    },
    results: []
}
export const locationsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-LOCATIONS":
            return action.locations
        default:
            return state
    }
}


export const getLocationsAC = (locations: LocationsResponse) => ({
    type: 'GET-LOCATIONS',
    locations
})

export const fetchLocationsTC = () => {
    // const locationNumber = location ?? 1

    return (dispatch: ThunkDispatch) => {
        dispatch(setLoadingAC(true))
        characterApi.getLocations()
            .then((res) => {
                dispatch(getLocationsAC(res.data))

            })
            .catch((error) => {
                console.error("Error fetching locations:", error)
            })
            .finally(() => {
                dispatch(setLoadingAC(false))
            })
    }
}

type setLocations = ReturnType<typeof getLocationsAC>

type ActionsType = setLocations | setLoading

type ThunkDispatch = Dispatch<ActionsType>