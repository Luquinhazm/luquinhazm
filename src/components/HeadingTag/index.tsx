import React from 'react';

interface HeadingTagProps {
  tag: string;
  children: React.ReactNode;
}

export default function HeadingTag({ tag, children }: HeadingTagProps) {
  const Tag = tag;

  let style
  if (Tag === "h1") style = "text-xl font-bold";
  if (Tag === "h2") style = "text-xl font-semibold";
  if (Tag === "h3") style = "font-semibold";
  

  const tagProps: React.HTMLProps<HTMLHeadingElement> = {
    className: `${style}`,
    children,
  };

  return (
    <Tag  {...tagProps} />
  );
}












// export default function HeadingTag({tag, children}){
//     const Tag = tag
    
//     let style
//     if (Tag === "h1") {
//       style = "text-xl font-bold"
//     }
//     if (Tag === "h2") {
//       style = "text-xl font-semibold"
//     }

//     if (Tag === "h3"){
//       style = "font-semibold"
//     }

//     return(
//       <Tag className={`${style}`} >{children}</Tag>     
//     )
// }