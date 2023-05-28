import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
    <div className="overflow-hidden relative transition duration-300 transform hover:-translate-y-3 rounded-sm shadow-lg hover:shadow-2xl">
      <img
        src={book.image}
        alt="Book Cover"
        className='object-cover w-full h-56 sm"h-60 md:h-64 lg:h-80'
      />
      <div className="bg-black bg-opacity-70 text-white absolute inset-0 opacity-0 hover:opacity-100 transition duration-300  py-9 px-5 flex flex-col">
        <p>{book.title}</p> <br />
        <p>{book.subtitle ? book.subtitle : "No Description"}</p> <br />
        <p className="mt-auto">Price: {book.price}</p> <br />
      </div>
    </div>
    </Link>
  );
};

export default Book;
