import {performRequest} from '@/lib/cms'
import CardProject  from "@/components/CardProject"

export const QUERY_ALL_PROJECT = `
query {
    allContentProjects {
      id
      title
      descricao
      imagemProjeto {
        url
      }
      slug
    }
  }
`

export interface ProjectRes{
    id: string,
    title: string
    descricao: string,
    imagemProjeto: {url: string},
    slug: string,
}

export default async function ListPost() {
    const  {data: res} = await performRequest({ query: QUERY_ALL_PROJECT});
    return(

       <div className="flex justify-center flex-wrap gap-2">
        {res.allContentProjects.map((project: ProjectRes)=>(
        <CardProject 
        key={project.id}
        title={project.title} 
        descricao={project.descricao}
        imagemProjeto={project.imagemProjeto.url}
        slug={project.slug}
        />
        ))}
       </div>
    )
  }