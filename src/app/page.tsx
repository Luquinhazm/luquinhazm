import CMain from "@/components/CMain";
import IconSocial from "@/components/IconSocial";
import ListPost from '@/components/ListPost';
import ListProject from "@/components/ListProject";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <>
      <CMain>
        <div className="flex justify-between flex-wrap items-center w-[90%] mt-[3vh]">
          <div className="w-11/12 max-w-[580px]">
            <h1 className="text-2xl py-3 font-bold">Olá, sejam bem-vindos &#x1F44B;</h1>
            <p>Eu me chamo Lucas, estudante de <strong>Analise e Desenvolvimento de Sistema</strong> e entusiasta do <strong>Desenvolvimento de Software</strong>. Aqui você poderá encontrar meus textos e projetos</p>
            <IconSocial />
          </div>
          <ProfileImage />
        </div>
      </CMain>
      <section className="my-2 mx-auto flex justify-center gap-9 w-[90%]">
        <div className="w-3/6">
          <ListPost/>
        </div>
        <div className="w-3/6 flex flex-col items-center justify-center">
           <ListProject/>
        </div>
      </section>
    </>
  )
}
