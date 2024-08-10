import { useEffect, useState } from 'react';
import { useNavigate, useLocation
    // ,useSearchParams 
} from 'react-router-dom';

import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
// import Pagination  from './Pagination';
// import { useDebounce } from '@/lib/hooks';

const Search = ({ placeholder = "Search player position..." }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  
//   const [searchParams] = useSearchParams();
//   let page = searchParams.get("page") || "";
//   let limit = searchParams.get("limit") || "";

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      // check if search term is empty string collections search results shoudl be removed
      if (query) {
        // check if query starts with d or D and then replace the value of query with defender
        let newQuery = query;
        if (newQuery.toLowerCase().startsWith("d")) {
          newQuery = "defender";
        }
        if (newQuery.toLowerCase().startsWith("f")) {
          newQuery = "forward";
        }
        if (newQuery.toLowerCase().startsWith("g")) {
          newQuery = "goalkeeper";
        }
        newUrl = formUrlQuery({
          params: location.search,
          key: "query",
          value: newQuery,
        });
        
      } else {
        newUrl = removeKeysFromQuery({
          params: location.search,
          keysToRemove: ["query", "page", "limit"],

        });
      }

      navigate(newUrl, { replace: true });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, location, navigate]);

  return (
    <div className="flex flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 mb-2">
      <img
        src="src/assets/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-gray-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>

  );
};

export default Search;
