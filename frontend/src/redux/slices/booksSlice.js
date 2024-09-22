import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'
import { createBookWithID } from "../../utils/createBookWithID"
// const initialState = {
//     books: [],
//     //errorMsg: ''
// }

const initialState = []

export const fetchBook = createAsyncThunk(
    'books/fetchBook',
    async () => {
        const response = await axios.get('http://localhost:4000/random-book');
        return response.data;
    }
);




const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state,action) =>{
            state.push(action.payload)
        },
        deleteBook: (state,action) =>{
            return state.filter((book) => book.id !== action.payload) 
        },
        toggleFavorite: (state,action) =>{

            state.forEach((book) =>{
                if(book.id === action.payload){
                    book.isFavorite = !book.isFavorite
                }
            })
            // return state.map((book) =>
            //     book.id === action.payload
            //         ? { ...book, isFavorite: !book.isFavorite }
            //         : book

            // )
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) { 
                state.push(createBookWithID(action.payload, 'API'));
            }
        });

        builder.addCase(fetchBook.rejected, (state,action) =>{
            //state.errorMsg = action.error.message 
            //one of the possible options to describe an error
            

        })
    }

})



export const { addBook, deleteBook, toggleFavorite} = booksSlice.actions
// export const thunkFunction = async (dispatch, getState) => {

//     try {
//         const response = await axios.get('http://localhost:4000/random-book')
//         if (response?.data?.title && response?.data?.author) {
//             dispatch(addBook(createBookWithID(response.data, 'API')))
//         }

//     } catch (error) {
//         console.log('Error fetching random book', error);
//     }

// }
export const selectBooks = (state) => state.books

export default booksSlice.reducer