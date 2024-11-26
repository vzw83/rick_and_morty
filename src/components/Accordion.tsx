// @flow 


import {useState} from "react";
import * as React from "react";
import {Button} from "./button/Button";

type Props = {
    buttonsArr: string[]
    title: string
    handlePageAlive: (status: string, title: string) => void
};
export const Accordion = ({buttonsArr, title, handlePageAlive}: Props) => {


    const [isOpen, setIsOpen] = useState(false)
    const [lastClickedButton, setLastClickedButton] = useState<string | null>(null);

    const resetClicked = () => {
        setLastClickedButton(null);
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div onClick={toggleAccordion} onBlur={toggleAccordion}
                 className={'flex justify-between  border border-blue-800 p-2  cursor-pointer'}>
                <span >{title}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {
                isOpen && (
                    <div
                        className={"flex flex-wrap gap-2 border border-blue-800 "}>
                        {
                            buttonsArr.map((btn, index) =>
                                <Button key={index} btnName={btn} title={title}
                                        handleClick={handlePageAlive}
                                        resetClicked={resetClicked}
                                        setLastClickedButton={setLastClickedButton}
                                        lastClickedButton={lastClickedButton}
                                >{btn} </Button>
                            )
                        }
                    </div>
                )
            }
        </div>

    )

};