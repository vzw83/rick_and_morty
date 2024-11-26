type Props = {
    title: string
};
export const Title = ({title}: Props) => {
    return (
        <h3 className={"text-center p-1.5 text-3xl font-medium"}>{title}</h3>
    );
};