import {useDispatch, useSelector} from "react-redux";
import {Cart} from "../Carts/Cart";
import React, {useEffect, useState} from "react";
import {AppDispatch, RootState} from "../../store/store";
import {CharacterType, LocationsResponse, LocationType} from "../../utils/types";
import {fetchMultipleCharactersTC} from "../../store/characters-reducer";
import {Title} from "../characters/Title";
import {SelectEpisodes} from "../selectEpisode/selectEpisodes";
import {fetchLocationTC} from "../../store/location-reducer";
import {fetchLocationsTC} from "../../store/locations-reducer";
import {NavLink} from "react-router-dom";

type Props = {};


export const Location = (props: Props) => {
    const location = useSelector<RootState, LocationType>(state => state.location)
    const locations = useSelector<RootState, LocationsResponse>(state => state.locations)
    const characters = useSelector<RootState, CharacterType[]>(state => state.characters)


    const dispatch: AppDispatch = useDispatch()

    const [selectedLocation, setSelectedLocation] = useState<number | null>(null);


    useEffect(() => {
        dispatch(fetchLocationsTC())
        dispatch(fetchLocationTC(selectedLocation))

    }, [dispatch, selectedLocation]);

    const handlerSelect = (location: number) => {
        // setSelectedEpisode(episode)
        dispatch(fetchLocationTC(location))
    }
    const locationsNum = () => {

        const count = locations.info.count
        const arrIds = []
        for (let i = 1; i <= count; i++) {
            arrIds.push(i)
        }
        return arrIds
    }
    const arrIds = locationsNum()

    useEffect(() => {
        const getResidents = () => {
            const allResidents = []
            for (let i = 0; i < location?.residents.length; i++) {
                allResidents.push(Number(location?.residents[i].split('/').pop()))
            }
            return allResidents
        }
        if (getResidents().length) {
            dispatch(fetchMultipleCharactersTC(getResidents()))

        }
    }, [location]);


    const normalizedChartres = Array.isArray(characters) ? characters : [characters]
    // console.log(normalizedChartres)
    return (
        <div className={"flex flex-col items-center"}>
            {location && (
                <h2 className={"font-bold text-4xl mb-2.5"}>Episode name : <span
                    className={"text-blue-500"}>{location.name}</span></h2>
            )
            }
            <h4 className={"font-bold text-xl mb-2.5"}>Air Date : <span>{location.dimension}</span></h4>
            <div className={"flex flex-col lg:flex-row justify-between"}>
                <div className={"mr-3.5"}>
                    <Title title={'Pick Location'}/>
                    <SelectEpisodes title={'Location'} onHandlerSelect={handlerSelect} itemArr={arrIds}/>
                </div>
                <div className={"flex justify-center flex-wrap w-3/4"}>
                    {normalizedChartres.map((ch) => {
                        return (
                            <NavLink key={ch.id} to={`/location/${ch.id}`}>
                                <Cart
                                    key={ch.id}
                                    name={ch.name}
                                    status={ch.status}
                                    image={ch.image}
                                    // location={ch.location}
                                />
                            </NavLink>

                        )
                    })}
                </div>
            </div>
        </div>

    );
};