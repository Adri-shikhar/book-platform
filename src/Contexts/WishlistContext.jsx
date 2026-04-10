import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (book) => {
        if (wishlist.some((b) => b.bookId === book.bookId)) {
            alert('This book is already in your wishlist.');
            return;
        }
        setWishlist((prev) => [...prev, book]);
    };

    const removeFromWishlist = (bookId) => {
        setWishlist((prev) => prev.filter((b) => b.bookId !== bookId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;
