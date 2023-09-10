import CMain from "@/components/CMain";
import ListPost from "@/components/ListPost";

export default function PostPage(){
    return (
        <CMain>
            <div className="max-w-[780px] mt-10">
                <h1 className="text-3xl font-semibold">Olhem Meus Posts</h1>
                <p className="my-4">Aqui você vai encontrar algumas tentativas minha de explicar sobre o que sei sobre desenvolvimento. tentarei ao maximo de ajudar a tirar suas duvidas</p>
            </div>
            <div className="flex flex-col gap-6 w-full items-center">
                <ListPost></ListPost>
            </div>
        </CMain>
    )
}
