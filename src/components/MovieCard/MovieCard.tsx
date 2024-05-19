import { memo } from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react';

import { MovieType } from '@/app/action';

const MovieCard = ({ film }: { film: MovieType }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="xl">{film.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="2xl">{film.director}</Text>
        <Divider />
        <Text fontSize="2xl">{film.producer}</Text>
      </CardBody>
      <CardFooter justifyContent="space-between">
        <Text fontSize="xl" color="white">
          {film.release_date}
        </Text>
        <Link href={`/movie/${film.url.match(/\d+/g)![0]}`}>
          <Button size="lg">View more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default memo(MovieCard);
