import React, { useContext } from 'react';
import { Link } from 'react-router';
import { WishlistContext } from '../../Contexts/WishlistContext';

const WishlistBooks = ({ book }) => {
    const { removeFromWishlist } = useContext(WishlistContext);

    return (
        <Link
            to={`/All_books/${book.bookId}`}
            className="no-underline"
        >
            <article className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm cursor-pointer hover:shadow-lg transition flex gap-6">
                {/* Book Image */}
                <div className="shrink-0 w-32 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-40 object-contain"
                    />
                </div>

                {/* Book Details */}
                <div className="flex-1">
                    <h2 className="font-serif text-2xl font-bold mb-2">
                        {book.bookName}
                    </h2>
                    <p className="text-sm text-gray-600 mb-3">By : {book.author}</p>

                    {/* Tags */}
                    <div className="flex gap-2 mb-4">
                        {(book.tags || []).slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Year & Publishing Info */}
                    <div className="text-sm text-gray-600 mb-3 flex gap-4">
                        <span className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                            </svg>
                            {book.yearOfPublishing}
                        </span>
                        <span>Publisher: {book.publisher}</span>
                        <span>Pages: {book.totalPages}</span>
                    </div>

                    {/* Category & Rating */}
                    <div className="flex gap-3 items-center">
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded">
                            Category: {book.category}
                        </span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded flex items-center gap-1">
                            Rating: {book.rating?.toFixed(1)}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.305 4.011a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.407 2.475a1 1 0 00-.364 1.118l1.305 4.011c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.748 2.503c-.784.57-1.84-.197-1.54-1.118l1.305-4.011a1 1 0 00-.364-1.118L2.246 9.438c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.305-4.011z" />
                            </svg>
                        </span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                removeFromWishlist(book.bookId);
                            }}
                            className="ml-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold text-sm"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default WishlistBooks;
