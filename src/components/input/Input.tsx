// @flow
import * as React from 'react';

type Props = {
    searchQuery: string
    onSearchChange: (query: string) => void;
};

export const Input = ({onSearchChange, searchQuery}: Props) => {


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.currentTarget.value)
    }
    return (
        < input value={searchQuery}
                onChange={handleInputChange}
                placeholder={"Search for characters"}
                className={"shadow-lg border-2 border-blue-500 rounded-lg w-1/3 h-1/6 p-2"}/>
    );
};