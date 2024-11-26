// @flow 
import * as React from 'react';
import {Status} from "../status/Status";

type Props = {
    name?: string
    status?: string
    image?: string
    location?: string
};
export const Cart = ({name, status, image, location}: Props) => {
    return (
        <div className="w-full">
            <div className="rounded overflow-hidden shadow-lg bg-white m-4 border-blue-500 border cursor-pointer">
                <img className="w-full h-auto object-cover" src={image} alt={"hero.name"}/>
                <Status status={status}/>

                <div className="px-6 py-4">
                    <h4 className="font-bold text-xl mb-2 text-gray-800">{name}</h4>
                    <p>Last Location</p>
                    <p className="text-gray-700 text-base">{location}</p>
                </div>
            </div>
        </div>

    );
};