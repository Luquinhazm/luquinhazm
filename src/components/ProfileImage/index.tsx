import Image from "next/image";

interface props{
size: string,
}

export default function ProfileImage(props: props) {
    return (
        <img
            className={`${props.size} min-h-[270px] min-w-[270px] rounded`}
            src="https://avatars.githubusercontent.com/u/90008972?v=4"
            alt=""
        />
    )
}