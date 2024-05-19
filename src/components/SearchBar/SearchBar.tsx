'use client';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { Input } from '@chakra-ui/react';

import { searchTimOut } from '@/utils';

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    searchTimOut(() => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }
      replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <Input
      placeholder="Search"
      defaultValue={searchParams.get('search') || ''}
      onChange={handleChangeSearch}
    />
  );
};

export default SearchBar;
