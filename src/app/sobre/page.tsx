import ProfileImage from "@/components/ProfileImage";
import { FaGithub, FaLinkedin, FaNode, FaReact, FaTwitter } from "react-icons/fa6";
import { TbBrandNextjs, TbMail } from 'react-icons/tb';
import { SiDotnet, SiStyledcomponents, SiMysql, SiMongodb } from "react-icons/si";
import CMain from "@/components/CMain";


export default function SobrePage() {
    return (
        <main className=" flex flex-wrap justify-between w-11/12 min-h-[80%] mx-auto">
            <div className="flex flex-col items-center justify-center  gap-3 w-7/12 min-h-[80vh] mt-3 max-[745px]:w-full ">
                <p className="max-w-lg">Oi, sou o Goku, não eu não sou o Goku… Me chamo Lucas Mendes, nascido em Taboão da Serra, São Paulo e estudante de Analise e Desenvolvimento de Sistema pelo Centro Universitário Senac, algo bem mais normal.
                </p>
                <p className="max-w-lg">Por muito tempo sonhei em trabalhar no setor audiovisual, mas meu primeiro emprego mesmo foi como pizzaiolo. Embora fosse uma experiência inesperada, ela me ensinou valiosas lições sobre trabalho em equipe, atendimento ao cliente e gestão do tempo. </p>
                <p className="max-w-lg">Na minha última experiência atuei em diversas áreas da mesma empresa, entre elas: Suporte técnico (com tudo aquilo que se imagina: manutenção de e-mails, impressoras que não funcionam e etc…),  viajei por todo o brasil fazendo instalações de infraestrutura de rede para órgãos públicos e  também atuei como analista de licitações públicas.  Hoje estou em busca da oportunidade de aplicar minha diversa experiência na área de desenvolvimento.</p>
                <p className="max-w-lg">Como um grande curioso, passo muito tempo explorando como as coisas se comportam nas mais diversas ferramentas e ambientes, Inclusive um dos objetivo desse site é tentar compartilhar meus estudos para mais gente possível. Espero que este espaço o inspire a se juntar a mim nesta busca pelo conhecimento e a compartilhar suas próprias descobertas ao longo do caminho. </p>

                {/* <div>
                    <ul className="flex gap-6 my-4">
                        <li><FaReact size='42'></FaReact></li>
                        <li><FaNode size='42'></FaNode></li>
                        <li><TbBrandNextjs size='42'></TbBrandNextjs></li>
                        <li><SiStyledcomponents size="42"></SiStyledcomponents></li>
                    </ul>
                    <ul className="flex gap-6 my-4">
                        <li><SiDotnet size="42"></SiDotnet></li>
                        <li><SiMysql size="42"></SiMysql></li>
                        <li><SiMongodb size="42"></SiMongodb></li>
                    </ul>
                </div> */}
            </div>
            <div className="flex flex-col max-[745px]:w-full mt-3 max-[745px]:mt-5 max-[745px]:items-center gap-3 w-[40%] ">
                <div className="flex justify-center max-[745px]:w-[80%]">
                    <ProfileImage size="w-[90%]" />
                </div>

                <div>
                    <ul className="flex justify-center ml-5 flex-col gap-3">
                        <li>
                            <a className="flex items-center gap-3" href="/"><TbMail size="32"></TbMail><span>luquinhazm@gmail.com</span></a>
                        </li>
                        <li>
                            <a className="flex items-center gap-3" href="https://www.linkedin.com/in/luquinhazm/"><FaLinkedin size="32"></FaLinkedin><span>Me segue no Linkedin</span></a>
                        </li>
                        <li>
                            <a className="flex items-center gap-3" href="https://twitter.com/luquinhazm"><FaTwitter size="32"></FaTwitter><span>Me segue no agora X</span></a>
                        </li>
                        <li>
                            <a className="flex items-center gap-3" href="https://github.com/Luquinhazm"><FaGithub size="32"></FaGithub><span>Veja meus repositorios</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}