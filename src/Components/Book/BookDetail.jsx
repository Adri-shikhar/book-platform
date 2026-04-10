import React from 'react';
import { useLoaderData } from 'react-router';
import { useContext } from 'react';
import { BookContext } from '../../Contexts/BookContext';
import { WishlistContext } from '../../Contexts/WishlistContext';

const BookDetail = () => {
    const book = useLoaderData();
    const { handleRead } = useContext(BookContext);
    const { addToWishlist } = useContext(WishlistContext);

    if (!book) {
        return <div className="max-w-6xl mx-auto px-6 py-12">Book not found.</div>;
    }
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <div className="bg-white rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: Book Cover */}
                    <div className="flex justify-center">
                        <img
                            src={book.image}
                            alt={book.bookName}
                            className="w-56 h-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right: Book Details */}
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-serif font-bold mb-2">{book.bookName}</h1>
                        <p className="text-gray-600 text-lg mb-1">By : {book.author}</p>
                        <p className="text-sm text-gray-500 mb-4">{book.category}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {(book.tags || []).map((tag) => (
                                <span key={tag} className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Review */}
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-400 mb-2">Review</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{book.review}</p>
                        </div>

                        {/* Book Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                            <div>
                                <p className="text-gray-500 font-semibold">Number of Pages:</p>
                                <p className="text-gray-800">{book.totalPages}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-semibold">Publisher:</p>
                                <p className="text-gray-800">{book.publisher}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-semibold">Year of Publishing:</p>
                                <p className="text-gray-800">{book.yearOfPublishing}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-semibold">Rating:</p>
                                <p className="text-gray-800 font-bold text-lg">{book.rating}</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button className="btn btn-outline btn-sm" onClick={() => handleRead(book)}>Read</button>
                            <button className="btn bg-cyan-400 text-white border-none btn-sm" onClick={() => addToWishlist(book)}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetail;
