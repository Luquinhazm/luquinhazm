import Link from "next/link";

export default function CHeader() {
    return (
        <header
            className="flex items-center justify-between min-h-[10%] w-11/12 my-0 mx-auto py-5 px-0"
        >
            <h1 className="text-3xl uppercase font-semibold"><Link href="/">Luquinhazm</Link></h1>
            <nav className="flex items-center">
                <ul className="flex py-0 px-8 gap-6 text-xl">
                    <li>
                        <Link href="/projetos" className="font-semibold">Projetos</Link>
                    </li>
                    <li>
                        <Link href="/posts" className="font-semibold">Posts</Link>
                    </li>
                    <li>
                        <Link href="/sobre" className="font-semibold">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}