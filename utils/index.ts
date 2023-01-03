const fetchers = async (url: string, revalidate?: number) => {
  const option = {
    next: {
      revalidate: revalidate ? revalidate : 0,
    },
  };
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, option);
  const data: Product[] = await resp.json();

  return data;
};

export default fetchers;
