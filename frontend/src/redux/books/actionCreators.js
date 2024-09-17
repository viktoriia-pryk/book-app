import * as actionType from './actionTypes'

export const addBook = (newBook) =>{
    return{
        type: actionType.ADD_BOOK,
        payload: newBook
    }

}

