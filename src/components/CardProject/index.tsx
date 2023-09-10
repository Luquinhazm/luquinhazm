import Image from 'next/image'
import mypic from '../../../public/Captura de tela 2023-08-21 234903.png'

interface ProjectCardProps{
    title: string
    descricao: string,
    imagemProjeto: string,
    slug: string,
}


export default function CardProject(props: ProjectCardProps) {
    return (
        <>
            <div className='my-3 h-[420px] max-w-[400px] w-[49%] text-sm dark:bg-zinc-800 rounded shadow max-[900px]:max-w-full max-[900px]:w-full'>
                <div className='relative h-1/2'>
                    <img src={props.imagemProjeto} alt={''} className='absolute top-0 left-0 w-full h-full object-cover'></img>
                </div>
                <div className='flex flex-col  h-1/2'>
                    <h2 className='text-lg px-2 my-1 h-1/4 font-semibold'>{props.title}</h2>
                    <p className='px-2 my-2 h-1/2 text-ellipsis line-clamp-6'>{props.descricao}</p>
                    <a href={`/projetos/${props.slug}`} className='px-2 font-bold text-green-600'>Veja mais</a>
                </div>
            </div>
        </>
    )
}