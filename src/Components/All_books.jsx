import React, { use } from 'react';
import { Link } from 'react-router';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const All_books = () => {
    const books = use(booksPromise);

    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-serif font-bold text-center mb-8">Books</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <Link key={book.bookId} to={`/All_books/${book.bookId}`} className="no-underline">
                            <article
                                className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm cursor-pointer hover:shadow-lg transition"
                            >
                                <div className="rounded-lg bg-gray-100 h-40 flex items-center justify-center mb-4">
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="h-32 object-contain"
                                    />
                                </div>

                                <div className="flex gap-2 mb-3">
                                    {(book.tags || []).slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-semibold text-lg mb-1">
                                    {book.bookName}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">By : {book.author}</p>

                                <div className="border-t pt-3 flex items-center justify-between text-sm text-gray-600">
                                    <span className="text-xs">{book.category}</span>
                                    <span className="flex items-center gap-1">
                                        <strong className="text-gray-800">{book.rating?.toFixed(1)}</strong>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.305 4.011a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.407 2.475a1 1 0 00-.364 1.118l1.305 4.011c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.748 2.503c-.784.57-1.84-.197-1.54-1.118l1.305-4.011a1 1 0 00-.364-1.118L2.246 9.438c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.305-4.011z" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-3 flex justify-end">
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default All_books;