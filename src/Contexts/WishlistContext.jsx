import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { WishlistContext } from './contexts';

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
            toast.error('This book is already in your wishlist.');
            return;
        }
        else {
            setWishlist((prev) => [...prev, book]);
            toast.success('Book added to wishlist');
        }
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
