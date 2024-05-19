import { SimpleGrid } from '@chakra-ui/react';

import { MovieCard, SearchBar } from '@/components';

import { getMovies } from './action';

const Page = async (context: { searchParams: { search?: string } }) => {
  const { search } = context.searchParams;

  const data = await getMovies(search);

  return (
    <main>
      <SearchBar />

      <SimpleGrid
        mt={4}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {data?.map((film) => (
          <MovieCard key={film.episode_id} film={film} />
        ))}
      </SimpleGrid>
    </main>
  );
};

export default Page;
