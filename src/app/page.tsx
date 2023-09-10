import CMain from "@/components/CMain";
import IconSocial from "@/components/IconSocial";
import ListPost from '@/components/ListPost';
import ListProject from "@/components/ListProject";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <>
      <CMain>
        <div className="flex justify-between flex-wrap items-center w-[90%] min-h-[80vh] max-[680px]:justify-center ">
        <ProfileImage size="w-[30%]"/>
          <div className="w-[55%] max-w-[580px] max-[680px]:w-11/12">
            <h1 className="text-2xl py-3 font-bold">Olá, sejam bem-vindos &#x1F44B;</h1>
            <p>Eu me chamo Lucas, estudante de <strong>Analise e Desenvolvimento de Sistema</strong> e entusiasta do <strong>Desenvolvimento de Software</strong>. Aqui você poderá encontrar meus textos e projetos</p>
            <IconSocial />
          </div>
        
        </div>
      </CMain>
      <section className="my-2 mx-auto flex flex-wrap justify-center  w-full">
        <div className="w-[48%] max-[1000px]:w-11/12">
          <ListPost/>
        </div>
        <div className="w-[48%] max-[1000px]:w-11/12 flex flex-col items-center justify-center">
           <ListProject/>
        </div>
      </section>
    </>
  )
}
