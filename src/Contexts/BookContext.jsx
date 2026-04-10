import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [readBooks, setReadBooks] = useState(() => {
        const saved = localStorage.getItem('readBooks');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('readBooks', JSON.stringify(readBooks));
    }, [readBooks]);

    const handleRead = (book) => {
        if (readBooks.some((e) => e.bookId === book.bookId)) {
            alert('You have already marked this book as read.');
            return;
        }
        setReadBooks((prev) => [...prev, book]);
    };

    return (
        <BookContext.Provider value={{ readBooks, handleRead, setReadBooks }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
