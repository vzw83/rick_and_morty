// @flow
import * as React from 'react';
import {Accordion} from '../Accordion';
import {Hero} from '../hero/Hero';
import {useState} from "react";


type Props = {
    handlePageAlive: (status: string, title: string) => void
};
export const FilterBox = ({handlePageAlive}: Props) => {


    const statusButtons = [
        'Alive', 'Dead', 'Unknown'
    ]
    const speciesButtons = [
        'Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological',
        'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'
    ]
    const genderButtons = [
        'female', 'male', 'genderless', 'unknown'
    ]


    return (
        <div>

            <Accordion title={'Status'} buttonsArr={statusButtons} handlePageAlive={handlePageAlive}/>
            <Accordion title={'Species'} buttonsArr={speciesButtons} handlePageAlive={handlePageAlive}/>
            <Accordion title={'Gender'} buttonsArr={genderButtons} handlePageAlive={handlePageAlive}/>
        </div>
    );
};