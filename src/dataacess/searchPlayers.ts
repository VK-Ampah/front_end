import { SearchResponse } from "@/constant/types";
import axios from "axios";


export const fetchResults = async (query: string, page: number, limit: number): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`http://localhost:8080/profile/search/${query}`, {
      params: {
        page: page,
        limit: limit
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};
