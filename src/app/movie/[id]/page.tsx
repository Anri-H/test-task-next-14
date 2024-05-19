import { redirect } from 'next/navigation';
import { Heading, Divider, Text, Box } from '@chakra-ui/react';

import { getMovie } from './action';

const Film = async ({ params }: { params: { id: string } }) => {
  const data = await getMovie(params.id);

  if (!data) {
    redirect('/404');
  }

  return (
    <main>
      <Box>
        <Heading size="4xl">{data.title}</Heading>
        <Divider />
        <Text fontSize="xl">Release date - {data.release_date}</Text>
        <Divider />
        <Text fontSize="2xl" color="gray">
          Director - {data.director}
        </Text>
        <Text fontSize="2xl" color="gray">
          Producer - {data.producer}
        </Text>
        <Box pt="50">
          <Text fontSize="2xl">{data.opening_crawl}</Text>
        </Box>
      </Box>
    </main>
  );
};

export default Film;
