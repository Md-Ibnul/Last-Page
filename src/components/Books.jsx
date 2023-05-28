import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
      return <LoadingSpinner />
    }
    const {books} = useLoaderData();
    console.log(books);
    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    books.map(book => (
                        <Book
                        book = {book}
                        key = {book.isbn13}
                        ></Book>
                    ))
                }
            </div>
        </div>
    );
};

export default Books;