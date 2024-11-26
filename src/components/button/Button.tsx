import * as React from 'react';
import {ButtonHTMLAttributes, FC, PropsWithChildren, useEffect, useState} from "react";

type Props = {
    handleClick?: (status: string, title: string) => void
    btnName?: string
    title?: string
    resetClicked?: () => void;
    setLastClickedButton?: (btnName: string | null) => void
    lastClickedButton?: string | null
};
export const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & Props>> = ({
                                                                                                   setLastClickedButton,
                                                                                                   lastClickedButton,
                                                                                                   resetClicked,
                                                                                                   children,
                                                                                                   handleClick,
                                                                                                   btnName,
                                                                                                   title,
                                                                                                   ...props
                                                                                               }) => {

    const [isClicked, setIsClicked] = useState(false);
    const onHandleClick = () => {
        if (handleClick && btnName && title)
            handleClick(btnName.toLowerCase(), title.toLowerCase())
        setIsClicked(true)
        if (setLastClickedButton) {
            setLastClickedButton(btnName ?? null)
        }
    }
    useEffect(() => {
        if (lastClickedButton && lastClickedButton !== btnName) {
            setIsClicked(false);
        }
    }, [lastClickedButton, btnName]);

    const buttonStyle = {
        backgroundColor: isClicked ? '#3b82f6' : 'white',
        color: isClicked ? 'white' : 'black',
        padding: '0.5rem 1rem',
        border: '2px solid #3b82f6',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <button
            onClick={onHandleClick}
            style={buttonStyle}
            {...props}
        >
            {children}
        </button>
    );
};