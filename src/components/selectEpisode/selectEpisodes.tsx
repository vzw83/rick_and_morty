// @flow 
import * as React from 'react';

type Props = {
    title: string
    itemArr: number[]
    onHandlerSelect: (episode: number) => void
};
export const SelectEpisodes = ({itemArr, onHandlerSelect, title}: Props) => {
    // console.log(episodesArr)
    const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onHandlerSelect(Number(event.currentTarget.value))
    }

    return (
        <div>
            <select className={"border w-[200px] lg:w-full h-[40px]"} onChange={handlerSelect} defaultValue={itemArr[0]}>
                {itemArr.map((ep, index) => (
                    <option key={index} value={ep}>
                        {title} - {ep}
                    </option>
                ))}
            </select>
        </div>
    );
};