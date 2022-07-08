import logo from './logo.svg';
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import React from 'react';
import './App.css';
import { Timer } from './components/Timer';
import { Clicker } from './components/Clicker';
import { Counter } from './components/Counter';
import { CharacterList } from './components/CharacterList';

function App() {
    const books = [
        {
            "title": "Northanger Abbey",
            "author": "Austen, Jane",
            "year": 1814,
            "edition": "Penguin",
            "price": 18.2
        },
        {
            "title": "War and Peace",
            "author": "Tolstoy, Leo",
            "year": 1865,
            "edition": "Penguin",
            "price": 12.7
        },
        {
            "title": "Anna Karenina",
            "author": "Tolstoy, Leo",
            "year_written": 1875,
            "edition": "Penguin",
            "price": 13.5
        },
        {
            "title": "Mrs. Dalloway",
            "author": "Woolf,Virginia",
            "year_written": 1925,
            "edition": "Harcourt Brace",
            "price": 25
        },
        {
            "title": "The Hours",
            "author": "Cunnningham, Michael",
            "year": 1999,
            "edition": "Harcourt Brace",
            "price": 12.35
        },
        {
            "title": "Huckleberry Finn",
            "author": "Twain, Mark",
            "year": 1865,
            "edition": "Penguin",
            "price": 5.76
        },
        {
            "title": "Bleak House",
            "author": "Dickens, Charles",
            "year": 1870,
            "edition": "Random House",
            "price": 5.75
        },
        {
            "title": "Tom Sawyer",
            "author": "Twain, Mark",
            "year": 1862,
            "edition": "Random House",
            "price": 7.75
        },
        {
            "title": "A Room of One's Own",
            "author": "Woolf, Virginia",
            "year": 1922,
            "edition": "Penguin",
            "price": 29
        },
        {
            "title": "Harry Potter",
            "author": "Rowling, J.K.",
            "year": 2000,
            "edition": "Harcourt Brace",
            "price": 19.95
        },
        {
            "title": "One Hundred Years of Solitude",
            "author": "Marquez",
            "year": 1967,
            "edition": "Harper  Perennial",
            "price": 14.00
        },
        {
            "title": "Hamlet, Prince of Denmark",
            "author": "Shakespeare",
            "year": 1603,
            "edition": "Signet  Classics",
            "price": 7.95
        },
        {
            "title": "Lord of the Rings",
            "author": "Tolkien, J.R.",
            "year": 1937,
            "edition": "Penguin",
            "price": 27.45
        }
    ]
    return (
        <div className="App">
            <header className="App-header">
                <CharacterList />
                <BookList books={books} />
            </header>
        </div>
    );
}

export default App;
