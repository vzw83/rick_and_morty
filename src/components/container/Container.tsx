import React, {ReactNode} from 'react';

type Props ={
    children: ReactNode
}
export const ContainerComponent = ({ children }: Props) => {
    return (
        <div className="container mx-auto ">
            {children}
        </div>
    );
};


