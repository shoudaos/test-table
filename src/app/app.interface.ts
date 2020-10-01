export interface Serial {
  name: string;
  season: number;
  networks: string[];
  genres: string[];
  premier: Date;
}

export interface Filters {
  name: string;
  genre: string;
  premier: string;
}

export interface SortOptions {
  field: string;
  order: 'asc' | 'desc';
}
