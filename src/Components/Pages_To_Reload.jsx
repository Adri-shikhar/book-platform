import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const Pages_To_Reload = () => {

    const { handleRead, readBooks } = useContext(BookContext);
    console.log(handleRead);
    console.log(readBooks);

    return (
        <div>
            <h1>This is the Pages to Reload Section</h1>
        </div>
    );
};

export default Pages_To_Reload;