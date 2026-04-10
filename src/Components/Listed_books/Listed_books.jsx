import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookContext } from '../../Contexts/BookContext';
import { WishlistContext } from '../../Contexts/WishlistContext';
import ReadBook from './ReadBook';
import WishlistBooks from './WishlistBooks';

const Listed_books = () => {
    const { readBooks } = useContext(BookContext);
    const { wishlist } = useContext(WishlistContext);

    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-serif font-bold mb-8">Books</h1>

                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="space-y-6">
                            {readBooks.length === 0 ? (
                                <p className="text-center text-gray-500">No books added yet</p>
                            ) : (
                                readBooks.map((book) => (
                                    <ReadBook key={book.bookId} book={book} />
                                ))
                            )}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="space-y-6">
                            {!wishlist || wishlist.length === 0 ? (
                                <p className="text-center text-gray-500">No wishlist books</p>
                            ) : (
                                wishlist.map((book) => (
                                    <WishlistBooks key={book.bookId} book={book} />
                                ))
                            )}
                        </div>
                    </TabPanel>
                </Tabs>
                <ToastContainer />
            </main>
        </div>
    );
};

export default Listed_books;
