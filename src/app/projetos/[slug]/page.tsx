
import { performRequest } from "@/lib/cms";
import { StructuredText, renderNodeRule } from 'react-datocms';
import ButtonBack from "@/components/ButtonBack";
import { isHeading, isLink, isParagraph } from "datocms-structured-text-utils";
import HeadingTag from "@/components/HeadingTag";
import { ProjectRes, QUERY_ALL_PROJECT } from "@/components/ListProject";

export const dynamicParams = false

export async function generateStaticParams() {
  const { data: res } = await performRequest({ query: QUERY_ALL_PROJECT });
   return res.allContentProjects.map((project: ProjectRes) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const querytitle = `query MyQuery {
    contentProject(
      filter: {slug: {eq: "${params.slug}"}}
    )
    {
      title
      descricao
    }
  }`
  const { data: res } = await performRequest({ query: querytitle });

  return {
    title: `luquinhazm - ${res.contentProject.title}`,
    description: `${res.contentProject.descricao}`
  }
}

function QueryPorSlug(slug: string) {
    return `
  query {
    contentProject(filter: {slug: {eq: "${slug}"}}) {
      id
      title
      descricao
      imagemProjeto {
        url
      }
      content {
        value
      }
      slug
    }
  }
  `
}

export default async function PostContentPage({ params }: { params: { slug: string } }) {
    const contentQuery = QueryPorSlug(params.slug)
    const { data: res } = await performRequest({ query: contentQuery });
    const data = res.contentProject
    return (
        <>
            <div className="flex flex-col justify-center items-center w-11/12 max-w-3xl mx-auto mt-10">
                <h2 className="font-semibold text-xl">{data.title}</h2>
                <div>
                    <img src={data.imagemProjeto.url} className="my-6 h-1/2 w-full object-cover " alt="" />
                    <StructuredText
                        data={data.content}
                        customNodeRules={[
                            renderNodeRule(isHeading, ({ node, children, key }) => {
                                const Tag = `h${node.level}`;
                                return (
                                    <HeadingTag  tag={Tag} key={key}>{children}</HeadingTag>
                                )
                            }),
                            renderNodeRule(isLink, ({ node, children, key }) => {
                                return (
                                    <a href={node.url} className=" text-zinc-500 underline" key={key}>{children}</a>
                                )
                            }),
                            renderNodeRule(isParagraph, ({ children, key }) => {
                                return (
                                    <p  className=" my-1" key={key}>{children}</p>
                                )
                            })
                        ]}
                    />
                </div>
            </div>
            <ButtonBack />
        </>
    )
}