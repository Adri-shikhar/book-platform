import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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
            toast.error('You have already marked this book as read.');
            return;
        }else
        {
            
            setReadBooks((prev) => [...prev, book]);
        toast.success('Book added to read list');}
    };

    return (
        <BookContext.Provider value={{ readBooks, handleRead, setReadBooks }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
