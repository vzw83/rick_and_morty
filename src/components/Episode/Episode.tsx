import {useDispatch, useSelector} from "react-redux";
import {Cart} from "../Carts/Cart";
import React, {useEffect, useState} from "react";
import {AppDispatch, RootState} from "../../store/store";
import {CharacterType, EpisodesType} from "../../utils/types";
import {fetchEpisodesTC} from "../../store/episodes-reducer";
import {fetchMultipleCharactersTC} from "../../store/characters-reducer";
import {Title} from "../characters/Title";
import {SelectEpisodes} from "../selectEpisode/selectEpisodes";
import {NavLink} from "react-router-dom";


type Props = {};


export const Episode = (props: Props) => {
    const episodes = useSelector<RootState, EpisodesType>(state => state.episodes)
    const characters = useSelector<RootState, CharacterType[]>(state => state.characters)

    const dispatch: AppDispatch = useDispatch()

    const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
    const episodeIds = () => {
        const arrIds = []
        for (let i = 0; i < characters[0]?.episode.length; i++) {
            arrIds.push(Number(characters[0]?.episode[i].split('/').pop()))
        }
        return arrIds
    }
    const arrIds = episodeIds()
    // console.log(episodes)
    const handlerSelect = (episode: number) => {
        // setSelectedEpisode(episode)
        dispatch(fetchEpisodesTC(episode))
    }

    useEffect(() => {
        dispatch(fetchEpisodesTC(selectedEpisode))
    }, []);

    // const characterIds = characters.map(ch=>ch.id)  // можно использовать вместо функции  const getCharacters
    // console.log(characterIds)


    useEffect(() => {
        const getCharacters = () => {
            const allCharacters = []
            for (let i = 0; i < episodes?.characters.length; i++) {
                allCharacters.push(Number(episodes.characters[i].split('/').pop()))
            }
            // console.log(allCharacters)
            return allCharacters
        }

        const getCharactersArr = getCharacters()
        // console.log(getCharactersArr)
        if (getCharactersArr.length) {
            dispatch(fetchMultipleCharactersTC(getCharactersArr))
        }
    }, [episodes])

    const normalizedChartres = Array.isArray(characters) ? characters : [characters]
    return (
        <div className={"flex justify-between"}>
            <div className={"flex flex-col items-center"}>
                {episodes && (
                    <h2 className={"font-bold text-4xl mb-2.5"}>Episode name : <span
                        className={"text-blue-500"}>{episodes.name}</span></h2>
                )
                }
                <h4 className={"font-bold text-xl mb-2.5"}>Air Date : <span>{episodes.air_date}</span></h4>
                <div className={"flex flex-col lg:flex-row justify-between"}>
                    <div className={"mr-3.5"}>
                        <Title title={'Pick Episode'}/>
                        <SelectEpisodes title={'Episode'} onHandlerSelect={handlerSelect} itemArr={arrIds}/>
                    </div>
                    <div className={"flex justify-center flex-wrap w-3/4"}>
                        {normalizedChartres.map((ch) => {
                            return (
                                <NavLink key={ch.id} to={`/episode/${ch.id}`}>
                                    <Cart
                                        key={ch.id}
                                        name={ch.name}
                                        status={ch.status}
                                        image={ch.image}
                                        // location={cart.location}
                                    />
                                </NavLink>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>

    )
        ;
};