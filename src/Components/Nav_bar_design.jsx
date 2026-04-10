import React from 'react';
import { Link } from 'react-router';

const Nav_bar_design = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <a className="text-2xl font-bold text-black">Book Vibe</a>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="btn btn-outline btn-sm btn-success">Home</Link>
                    <Link to="/listed-books" className="text-sm text-gray-600 hover:text-black">Listed Books</Link>
                    <Link to="/pages-to-reload" className="text-sm text-gray-600 hover:text-black">Pages To Read</Link>
                </div>

                <div className="flex items-center gap-2">
                    <button className="btn btn-outline btn-sm text-gray-600">Sign In</button>
                    <button className="btn bg-cyan-400 btn-sm text-white border-none">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav_bar_design;