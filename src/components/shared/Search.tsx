import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import Pagination  from './Pagination';
// import { useDebounce } from '@/lib/hooks';

const Search = ({ placeholder = "Search position..." }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (query) {
        newUrl = formUrlQuery({
          params: location.search,
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: location.search,
          keysToRemove: ["query"],
        });
      }

      navigate(newUrl, { replace: true });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, location, navigate]);

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <img
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-black"
      />
      <Pagination page = {1} totalPages = {100} limit = {10} />
    </div>

  );
};

export default Search;
