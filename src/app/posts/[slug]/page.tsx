import { PostRes, PostsQuery } from "@/components/ListPost";
import { performRequest } from "@/lib/cms";
import { StructuredText } from 'react-datocms';
import ButtonBack from "@/components/ButtonBack";

export const dynamicParams = false

export async function generateStaticParams() {
  const { data: res } = await performRequest({ query: PostsQuery });
   return res.allContentPosts.map((post: PostRes) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const querytitle = `query MyQuery {
    contentPost(
      filter: {slug: {eq: "${params.slug}"}}
    )
    {
      title
      resumoDoPost
    }
  }`
  const { data: res } = await performRequest({ query: querytitle });
    
  return {
    title: `luquinhazm - ${res.contentPost.title}`,
    description: `${res.contentPost.resumoDoPost}`
  }
}

function QueryPorSlug(slug: string){
  return `
  query responseQuery{
    contentPost(filter: { slug: { eq: "${slug}"} }){
      id
      title
      dataDePublicacao
      imagemPost{
        url
      }
      texto{
        value
        blocks {
          __typename
        ... on ImagemblockRecord{
          id
          imagem{id url}
        }
        }
      }
    }
  }
  `
}

export default async function PostContentPage({ params }:  { params: { slug: string } }) {

  const contentQuery = QueryPorSlug(params.slug)
  const { data: res } = await performRequest({ query: contentQuery });
  const data = res.contentPost

  return (
  <>
    <div className="flex flex-col justify-center items-center w-11/12 max-w-3xl mx-auto mt-10">
      <h2 className="font-semibold text-xl">{data.title}</h2>
      <div>
        <img src={data.imagemPost.url} className="my-6 h-80 w-full object-cover " alt="" />
        
        <StructuredText
          data={data.texto}
          renderBlock={({ record  }) => {
            switch(record.__typename){
              case "ImagemblockRecord":
                const imagem: any = record.imagem
                return <img className="my-5 mx-auto" src={ imagem.url } />
                default: return <></>;
            }
          }}
        />
         
      </div>
    </div>
      <ButtonBack/>
    </>
  )
}