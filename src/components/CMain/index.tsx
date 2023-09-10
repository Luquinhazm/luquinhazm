import { ReactNode } from "react"

type CMainProps = {
    children: ReactNode
}

export default function CMain({children}: CMainProps){
    return (
        <main className="flex flex-wrap flex-col justify-around items-center min-h-[80vh]">
            {children}
        </main>
    )
}