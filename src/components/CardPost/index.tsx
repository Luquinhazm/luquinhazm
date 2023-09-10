import Link from "next/link"
import { format, parseISO } from 'date-fns';

interface PostCardProps{
    id:string,
    title: string,
    dataDePublicacao: string,
    resumo: string,
    slug: string
}

export default function CardPost(props: PostCardProps){
    const data = (props.dataDePublicacao)
    const dataISO =parseISO(data)
    const dataPublicacao = format(dataISO, 'dd/MM/yyyy')
    
    return(
        <div className="max-w-[780px] w-full my-3 p-4 rounded shadow dark:bg-zinc-800">
            <div>
                <h2 className="text-xl font-semibold">{props.title}</h2>
                <span className="text-xs">{dataPublicacao}</span>
            </div>
            
            <p className="line-clamp-4 text-ellipsis text-sm my-3">{props.resumo}</p>
            <Link href={`posts/${props.slug}`} className="text-sm text-green-500 font-bold">Veja mais</Link>
        </div>
    )
}