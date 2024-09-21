import { useDispatch , useSelector} from "react-redux"
import { setTitleFilter, selectTitleFilter,resetFilters } from "../../redux/slices/FilterSlice"
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const handleTitleFilterChange = (e) =>{
    dispatch(setTitleFilter(e.target.value))

  }

  const handleResetFilters = () =>{
    dispatch(resetFilters())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">

      <div className="filter-group">
        <input 
        value={titleFilter}
        type="text" 
        placeholder="Filter by title ..." 
        onChange={handleTitleFilterChange}/>
      </div>
      <button type="button" onClick={handleResetFilters}>Reset Filter</button>
      </div>
    </div>
  )
}

export default Filter