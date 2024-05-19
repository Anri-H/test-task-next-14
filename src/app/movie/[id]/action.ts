import { MovieType } from '@/app/action';

export const getMovie = async (id: string) => {
  const response = await fetch(`${process.env.BASE_URL_MOVIE}films/${id}`);

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as MovieType;
};
