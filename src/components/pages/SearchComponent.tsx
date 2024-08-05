import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchResults } from '@/dataacess/searchPlayers';
import Collections from '../shared/Collections';
import { SearchResponse } from '@/constant/types';
import Search from '../shared/Search';


const SearchComponent = () => {
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const fetchData = async () => {
      const results = await fetchResults(query, page, limit);
      setSearchResults(results);
    };

    fetchData();
  }, [location.search, searchParams]);

  return (
    <div>
      <h1>Search</h1>
      <p>Search for players</p>
    <Search />
      {searchResults && <Collections searchResults={searchResults} />}
    </div>
  );
}

export default SearchComponent;
