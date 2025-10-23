// src/types/Movie.ts
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}