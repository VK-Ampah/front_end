import React from 'react';
import { SearchResponse, PlayerDetails } from '@/constant/types';
import Card from './Card';
import Pagination  from './Pagination';

type CollectionsProps = {
  searchResults: SearchResponse;
};

const Collections = ({ searchResults }: CollectionsProps) => {
  const totalPages = Math.ceil(searchResults.totalCount / searchResults.limit);

  return (
    <div>
      <h1>Collections</h1>

        {searchResults.results.map((result: PlayerDetails, index: number) => {
          return <div key={index}><Card player={result} /></div>
        })}
    
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
