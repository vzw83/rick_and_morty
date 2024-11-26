import {Loading} from "../utils/types";

const initialState: Loading = {
    loading: false
};

export const loadingReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-LOADING":
            return { ...state, loading: action.loading };
        default:
            return state;
    }
};

export const setLoadingAC = (loading: boolean) => ({
    type: 'SET-LOADING',
    loading
} as const);



export type setLoading = ReturnType<typeof setLoadingAC>;

type ActionsType = setLoading;

