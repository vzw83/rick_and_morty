// @flow 
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from '../../store/store';
import {CharacterType, EpisodesType, LocationType} from '../../utils/types';
import {useParams} from "react-router-dom";
import { Status } from '../status/Status';

type Props = {
};
export const Hero = (props: Props) => {
    const episodes = useSelector<RootState, EpisodesType>(state => state.episodes)
    const location = useSelector<RootState, LocationType>(state => state.location)

    const characters = useSelector<RootState, CharacterType[]>(state => state.characters)
    const params = useParams()


    if (characters.length === 0) {
        return <div>Loading...</div>;
    }

    const characterId = Number(params.id);

    const character = characters.find(char => char.id === characterId);
    console.log(character)

    if (!character) {
        return <div>Character not found</div>;
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h3 className="text-2xl font-bold" >{character.name}</h3>
                <img className="mx-auto my-4" src={character.image} alt={character.name}/>
                <Status status={character.status}/>
                <p>Gender: {character.gender}</p>
                <p>Location: {character.location.name}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Species: {character.species}</p>
            </div>
        </div>

    );
};