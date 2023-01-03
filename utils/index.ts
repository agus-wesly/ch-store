const fetchers = async (url: string, revalidate?: number) => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    next: { revalidate: !revalidate ? false : revalidate },
  });
  const data: Product[] = await resp.json();

  return data;
};

export default fetchers;
