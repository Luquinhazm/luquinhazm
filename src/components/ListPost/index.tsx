import {performRequest} from '@/lib/cms'
import CardPost from '../CardPost';

export const PostsQuery = `
query Post {
  allContentPosts{
    id,
    title,
    slug,
    resumoDoPost,
    dataDePublicacao
  }
}
`

export interface PostRes{
    title: string
    resumoDoPost: string,
    dataDePublicacao: string,
    id: string,
    slug: string,
}

  export default async function ListPost() {
    const  {data: res} = await performRequest({ query: PostsQuery});
    return(
       <div className='mx-auto'>
        {res.allContentPosts.map((post: PostRes)=>(
          <CardPost 
          key={post.title}
          title={post.title} 
          dataDePublicacao={post.dataDePublicacao} 
          resumo={post.resumoDoPost} 
          id={post.id}
          slug={post.slug}
          />
        ))}
       </div>
    )
  }