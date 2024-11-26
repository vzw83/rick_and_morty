import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Pagination from "@mui/material/Pagination/Pagination";

import {fetchCharactersTC} from "../../store/characters-reducer";
import {fetchCharactersAllResponseTC} from "../../store/charactersAllResponse-reducer";
import {AppDispatch, RootState} from "../../store/store";
import {CharacterResponse, CharacterType, Loading} from "../../utils/types";
import {SearchElement} from "../searchElement/SearchElement";
import {Title} from "../characters/Title";
import {FilterBox} from "../filterBox/FilterBox";
import {Cart} from "../Carts/Cart";
import {Button} from "../button/Button";

type Props = {};

export const Character = (props: Props) => {
    const characters = useSelector<RootState, CharacterType[]>(state => state.characters);
    const charactersAllRes = useSelector<RootState, CharacterResponse>(state => state.charactersAllRes);
    const dispatch: AppDispatch = useDispatch();



    const [searchQuery, setSearchQuery] = useState<string>('');

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [filters, setFilters] = useState({
        status: "",
        gender: "",
        species: ""
    });

    useEffect(() => {
        dispatch(fetchCharactersTC(currentPage, filters.status, filters.gender, filters.species, searchQuery));
        dispatch(fetchCharactersAllResponseTC(currentPage, filters.status, filters.gender, filters.species, searchQuery));
    }, [dispatch, currentPage, filters, searchQuery]);

    const normalizedChartres = Array.isArray(characters) ? characters : [characters];

    // const filteredCharacters = normalizedChartres.filter((character) =>
    //     character.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filteredCharacters = normalizedChartres.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handlePageAlive = (btnName: string, title: string) => {
        setFilters((prevFilters) => {
            let newFilters = {...prevFilters};

            if (title === "status") {
                newFilters.status = btnName;
            }
            if (title === "gender") {
                newFilters.gender = btnName;
            }
            if (title === "species") {
                newFilters.species = btnName;
            }

            setCurrentPage(1); // Сбрасываем страницу на первую при изменении фильтров
            return newFilters;
        });
    };

    const handlerOnChange = (event: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handlerClearFilters = () => {
        setFilters({
            status: "",
            gender: "",
            species: ""
        });
        setCurrentPage(1);
        setSearchQuery('')
    }

    return (
        <div className={"flex flex-col"}>
            <Title title={"Characters"}/>

            <SearchElement searchQuery={searchQuery} onSearchChange={setSearchQuery}/>
            <div className={"flex flex-col lg:flex-row justify-between"}>
                <div className={"w-full lg:w-1/4 mr-3.5"}>
                    <h3 className={"font-medium text-3xl text-center mb-[20px]"}>Filters</h3>
                    <Button onClick={handlerClearFilters}>Clear Filters</Button>
                    <FilterBox  handlePageAlive={handlePageAlive}/>
                </div>
                <div className={"flex justify-center flex-wrap w-3/4"}>
                    {filteredCharacters.map((ch) => (
                        <NavLink key={ch.id} to={`/characters/${ch.id}`}>
                            <Cart
                                name={ch.name}
                                status={ch.status}
                                image={ch.image}
                                location={ch.location.name}
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex justify-center items-center py-4">
                <Pagination
                    onChange={handlerOnChange}
                    count={charactersAllRes.info.pages}
                    variant="outlined"
                    shape="rounded"
                    page={currentPage}
                />
            </div>
        </div>
    );
};