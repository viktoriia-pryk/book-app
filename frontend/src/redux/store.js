import { configureStore } from "@reduxjs/toolkit"; 
import booksReducer from "./books/books-reducer";
import filterReducer from "./slices/FilterSlice"

const store = configureStore({
    reducer : {
        books: booksReducer,
        filter: filterReducer

    }
})

export default store