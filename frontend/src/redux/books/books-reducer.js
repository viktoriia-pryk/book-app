import * as actionType from './actionTypes'

const initialState = []

const booksReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionType.ADD_BOOK:
            return [...state , action.payload]

          case actionType.DELETE_BOOK: 
          return state.filter((book) => book.id !== action.payload)  
            
        
    
        default:
            return  state;
    }

}

export default booksReducer

