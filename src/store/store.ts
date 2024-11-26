import {combineReducers, UnknownAction} from 'redux'
import { ThunkDispatch} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from './characters-reducer';
import {episodesReducer} from './episodes-reducer';
import { locationReducer } from './location-reducer';
import { locationsReducer } from './locations-reducer';
import { charactersAllResponseReducer } from './charactersAllResponse-reducer';
import { loadingReducer } from './loading-reducer';


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    characters: charactersReducer,
    charactersAllRes: charactersAllResponseReducer,// ? нужен ли он вообще?! вопрос Теме))
    locations: locationsReducer,
    location: locationReducer,
    episodes: episodesReducer,
    loading: loadingReducer,
})
// непосредственно создаём store
// export const store = legacy_createStore(typeof rootReducer)
export const store = configureStore({reducer: rootReducer},)

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof rootReducer>

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store