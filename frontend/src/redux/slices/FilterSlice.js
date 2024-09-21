import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    title: '',
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTitleFilter: (state, action) =>{
            state.title = action.payload
        },
        resetFilters: (state) =>{
            return initialState
        }
    }
})
// console.log(filterSlice.actions);
// console.log(filterSlice.actions.setTitleFilter('test'));
export const { setTitleFilter, resetFilters} = filterSlice.actions
export const selectTitleFilter =  (state) => state.filter.title


export default filterSlice.reducer