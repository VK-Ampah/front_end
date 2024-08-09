import { SearchResponse } from "@/constant/types";
import axios from "axios";

export const getPlayers = async () => {
    const response = await axios.get("http://54.235.63.192:80/profile/all");
    return response.data;
    };

    // export const fetchResults = async (position: string, page: number, limit: number): Promise<SearchResponse> => {
    //     try {
    //       const response = await axios.get<SearchResponse>(`http://localhost:8080/profile/search/${position}`, {
    //         params: {
    //           page: page,
    //           limit: limit
    //         },
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });
    //       return response.data;
    //     } catch (error) {
    //       console.error('Error fetching results:', error);
    //       throw error;
    //     }
    //   };

export const fetchResults = async (query: string, page: number, limit: number): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`http://54.235.63.192:80/profile/search/${query}`, {
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
