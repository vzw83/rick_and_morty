import {Button} from "../button/Button";
import {Input} from "../input/Input";

type Props = {
    searchQuery: string
    onSearchChange: (query: string) => void;
};
export const SearchElement = ({onSearchChange,searchQuery}: Props) => {
    return (
        <div className={"text-center p-3"}>
            <span className={"mr-10"}><Input searchQuery={searchQuery} onSearchChange={onSearchChange}/></span>

            <Button children="Search"/>
        </div>
    );
};
