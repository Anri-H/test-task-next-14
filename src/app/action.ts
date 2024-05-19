export type MovieType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export const getMovies = async (query?: string) => {
  const response = await fetch(
    `${process.env.BASE_URL_MOVIE}films/${query ? `?search=${query}` : ''}`,
  );

  if (!response.ok) {
    return null;
  }

  return (await response.json()).results as MovieType[];
};
