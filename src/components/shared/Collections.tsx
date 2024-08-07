import React from 'react';
import { SearchResponse, PlayerDetails } from '@/constant/types';
import Card from './Card';
import Pagination from './Pagination';

type CollectionsProps = {
  searchResults: SearchResponse;
};

const Collections = ({ searchResults }: CollectionsProps) => {
  const totalPages = Math.ceil(searchResults.totalCount / searchResults.limit);

  return (
    <div>
      <h1>Results</h1>
      {searchResults.results.length > 0 ? (
        searchResults.results.map((result: PlayerDetails, index: number) => (
          <div key={index}><Card player={result} /></div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-4">No results found for your search.</p>
      )}
      <Pagination
        page={searchResults.page}
        totalPages={totalPages}
        limit={searchResults.limit}
        urlParamName="page"
      />
    </div>
  );
}

export default Collections;
