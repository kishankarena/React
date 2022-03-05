import React, { useEffect } from 'react';
const MyBooks = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <h1>MyBooks</h1>
            <p>These are my books...</p>
        </div>
    );
};
export default MyBooks;