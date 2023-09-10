import ProfileImage from "@/components/ProfileImage";
import { FaGithub, FaLinkedin, FaNode, FaReact, FaTwitter } from "react-icons/fa6";
import {TbBrandNextjs, TbMail} from 'react-icons/tb';
import { SiDotnet, SiStyledcomponents, SiMysql, SiMongodb } from "react-icons/si";
import CMain from "@/components/CMain";


export default function SobrePage(){
    return (
        <main className="flex justify-between w-[90%] min-h-[80%] mx-auto">
            <div className="flex flex-col items-center justify-center p-6 gap-3 min-h-[80vh] mt-3">
                <p className="max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident a reprehenderit nostrum obcaecati atque inventore unde odit sint ipsum. Aspernatur pariatur fugit rem, possimus veniam eligendi asperiores iure nesciunt reiciendis?</p>
                <p className="max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident a reprehenderit nostrum obcaecati atque inventore unde odit sint ipsum. Aspernatur pariatur fugit rem, possimus veniam eligendi asperiores iure nesciunt reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores?</p>
                <p className="max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident a reprehenderit nostrum obcaecati atque inventore unde odit sint ipsum. Aspernatur pariatur fugit rem, possimus veniam eligendi asperiores iure nesciunt reiciendis?</p>
                <p className="max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident a reprehenderit nostrum obcaecati atque inventore unde odit sint ipsum. Aspernatur pariatur fugit rem, possimus veniam eligendi asperiores iure nesciunt reiciendis?</p>

                <div>
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
                </div>
            </div>
            <div className="flex flex-col gap-3 w-[40%] p-6">
                <ProfileImage/>
                <h2>Oi, Eu sou o Goku</h2>
                <div>
                    <ul className="flex flex-col gap-3">
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