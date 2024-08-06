// types.ts

// Address interface
export interface Address {
    id: number;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
  
  // FormerTeam interface
  export interface FormerTeam {
    id: number;
    name: string;
  }
  
  // Language interface
  export interface Language {
    id: number;
    name: string;
  }
  
  // PlayerDetails interface
  export interface PlayerDetails {
    playerId: number;
    position: string;
    jerseyNumber: number;
    height: number;
    weight: number;
    birthDate: string;
    signingDate: string;
    endingDate: string;
    isActive: boolean;
    formerTeams: FormerTeam[];
    languages: Language[];
    address: Address;
  }
  
  // Profile interface
  export interface Profile {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    username: string;
    phone?: string;
    playerDetails?: PlayerDetails;
  }
  
  interface SearchResponse {
    results: PlayerDetails[];
    totalCount: number;
    page: number;
    limit: number;
  }

  // SearchResults interface
  type UrlQueryParams = {
    params: string;
    key: string;
    value: string;
    limitKey?: string;
    limitValue?: string;
    pageKey?: string;
    pageValue?: string;
  };
  
  export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
  }
  
  export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }