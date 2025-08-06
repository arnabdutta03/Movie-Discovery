// hooks/useMovies.js
import { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';
import { updateSearchCount, getTrendingMovies } from './appwrite';
import { API_URL, API_OPTIONS } from './config';

export const useMovies = (searchTerm) => {
  const [deBouncedSearch, setDebouncedSearch] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isTrendLoading, setIsTrendLoading] = useState(false);
  const [errorTrendMessage, setErrorTrendMessage] = useState('');

  useDebounce(() => setDebouncedSearch(searchTerm), 1000, [searchTerm]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const endpoint = deBouncedSearch
          ? `${API_URL}/search/movie?query=${encodeURIComponent(deBouncedSearch)}`
          : `${API_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) throw new Error('Failed to fetch movies');

        const data = await response.json();

        if (data.Response === 'False') {
          setErrorMessage(data.Error || 'Failed to fetch movies');
          setMovieList([]);
          return;
        }

        setMovieList(data.results || []);

        if (deBouncedSearch && data.results.length > 0) {
          await updateSearchCount(deBouncedSearch, data.results[0]);
        }

      } catch (error) {
        console.log(`Error fetching movies: ${error}`);
        setErrorMessage('Error fetching movies, Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [deBouncedSearch]);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      setIsTrendLoading(true);
      setErrorTrendMessage('')
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(`Error fetching trending movies: ${error}`);
        setErrorTrendMessage('Error fetching trending movies, Please try again later.');
      } finally {
        setIsTrendLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  return { movieList, isLoading, errorMessage, trendingMovies, isTrendLoading, errorTrendMessage };
};
