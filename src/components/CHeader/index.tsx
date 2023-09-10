import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

export default function CHeader() {
    return (
        <header
            className="flex items-center justify-between min-h-[10%] w-11/12 my-0 mx-auto py-5 px-0 flex-wrap max-[580px]:justify-center"
        >
            <h1 className="text-3xl uppercase font-semibold"><Link href="/">Luquinhazm</Link></h1>
            <nav className="flex items-center gap-6">
                <ul className="flex  gap-6 text-xl">
                    <li className="transition-colors hover:text-zinc-300">
                        <Link href="/projetos" className="font-semibold">Projetos</Link>
                    </li>
                    <li className="transition-colors hover:text-zinc-300">
                        <Link href="/posts" className="font-semibold">Posts</Link>
                    </li>
                    <li className="transition-colors hover:text-zinc-300">
                        <Link href="/sobre" className="font-semibold">Sobre</Link>
                    </li>
                </ul>
                    <ThemeSwitcher/>
            </nav>
        </header>
    )
}