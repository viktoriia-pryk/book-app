import * as actionType from './actionTypes'

export const addBook = (newBook) =>{
    return{
        type: actionType.ADD_BOOK,
        payload: newBook
    }

}

export const deleteBook = ( id) =>{
    return{
        type: actionType.DELETE_BOOK,
        payload: id
    }
}

export const toggleFavorite = (id) => {
    return {
        type: actionType.TOGGLE_FAVORITE,
        payload: id
    }
}