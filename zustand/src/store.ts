import { create } from "zustand";


interface Movie {
    id: string;
    title: string;
    year: string;
    image: string;
}



type CounterStore = {
    movies: Movie[];
    searchText: string;
    text: string;
    setSearchText: (text: string) => void;
    setText: (text: string) => void;
    fetchMovies: () => void;
    searchMoviesByTitle: (title: string) => void;
}

export const useTextStore = create<CounterStore>((set) => ({
    movies: [],
    text: '',
    searchText: '',
    setSearchText: (str) => set({ searchText: str }),
    setText: (str) => set({ text: str }),
    fetchMovies: async () => {
        const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a18840d9e6msh7d1933eef0bcd33p1b6d44jsn52b7eaf7bc8b',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const movies: Movie[] = result.d.map((movie) => ({
                id: movie.id,
                title: movie.l,
                year: movie.y,
                image: movie.i ? movie.i.imageUrl : ''
            }))
            set({ movies })
        } catch (error) {
            console.error(error);
        }
    },
    searchMoviesByTitle: async (title) => {
        const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${title}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a18840d9e6msh7d1933eef0bcd33p1b6d44jsn52b7eaf7bc8b',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
          }
        };
        const response = await fetch(url, options);
        const result = await response.json();

        const movies: Movie[] = result.d.map((movie) => ({
            id: movie.id,
            title: movie.l,
            year: movie.y,
            image: movie.i ? movie.i.imageUrl : ''
        }))
        set({ movies })     
    }
}))