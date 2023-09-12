export const performRequest = async ({ query, variables = {},}) => {
    const response = await fetch("https://graphql.datocms.com/", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
      },
      method: "POST",
      body: JSON.stringify({ query, variables }),
      next: {revalidate: 60}
    });
    
    const responseBody = await response.json();
    
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
    }
    
    return responseBody;
  }