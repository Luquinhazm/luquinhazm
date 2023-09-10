import CMain from "@/components/CMain";
import CardProject from "@/components/CardProject";
import ListProject from "@/components/ListProject";

export default function ProjetosPage(){
    return (
        <CMain>
            
            <h1 className="text-lg font-bold mt-10">Dê uma olhada nos meus Projetos</h1>
            <div className="flex justify-center flex-wrap gap-3 my-4 w-[90%]">
             <ListProject/>  
            </div>
        </CMain>
    )
}