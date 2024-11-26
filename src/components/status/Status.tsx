// @flow
import * as React from 'react';

type Props = {
    status?: string
};

export const Status = ({status}: Props) => {
    let colorStatus = ''
    if (status==="Alive"){
        colorStatus = 'bg-green-700'
    }
    if (status==="Dead"){
        colorStatus = 'bg-red-700'
    }
    if (status==="unknown"){
        colorStatus = 'bg-gray-500'
    }
    return (
        <div className={`${colorStatus} p-1.5 text-center text-cyan-300`}>
            {status}
        </div>
    );
};