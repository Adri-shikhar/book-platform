import React from 'react';
import { Link } from 'react-router';
import heroImage from '../assets/hero.png';
import User from './All_books';
import All_books from './All_books';

const Hero = () => {
    return (
        <div>
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-gray-100 rounded-2xl p-12">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-2/3">
                                <h1 className="text-5xl font-serif font-bold mb-6 leading-tight display-serif text-black">
                                    Books to freshen up <br /> your bookshelf
                                </h1>
                                <Link
                                    to="/listed-books"
                                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold"
                                >
                                    View The List
                                </Link>
                            </div>

                            <div className="lg:w-1/3 flex justify-end">
                                <img
                                    src={heroImage}
                                    alt="Hero Book"
                                    className="w-64 h-auto drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <All_books></All_books>
        </div>
    );
};

export default Hero;