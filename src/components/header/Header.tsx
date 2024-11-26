import { ContainerComponent } from "../container/Container";
import {NavLink} from "react-router-dom";

type Props = {};
export const Header = (props: Props) => {
    return (
        <header className={"bg-gray-100 p-5"}>
            <ContainerComponent>
                <div className={"flex flex-col lg:flex-row justify-between"}>
                    <h1><a href={"/"} className={"font-medium"}>Rick & Morty <span
                        className={"text-blue-500"}>WiKi</span></a></h1>
                    <nav>
                        <ul className={"flex justify-between gap-2.5"}>
                            <li><NavLink className={({isActive})=>isActive ? "text-blue-500 font-bold" : "text-black"} to="/characters">Characters</NavLink></li>
                            <li><NavLink className={({isActive})=>isActive ? "text-blue-500 font-bold" : "text-black"} to="/episode">Episode</NavLink></li>
                            <li><NavLink className={({isActive})=>isActive ? "text-blue-500 font-bold" : "text-black"} to="/location">Location</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </ContainerComponent>
        </header>
    );
};
