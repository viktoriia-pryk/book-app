import { useSelector } from "react-redux"
import '../BookList/BookList.css'
import { useDispatch } from "react-redux"
import { deleteBook, selectBooks, toggleFavorite } from "../../redux/slices/booksSlice"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectTitleFilter ,selectAuthorFilter, selectOnlyFavoriteFilter} from "../../redux/slices/FilterSlice";

const BookList = () => {
  const books = useSelector(selectBooks)
  console.log(books);
  
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  const dispatch = useDispatch()

  const deleteBookHandler = (id) =>{
    
    dispatch(deleteBook(id))

  }

  const handleToggleFavorite = (id) =>{
    dispatch(toggleFavorite(id))
  }
  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase()
                                    .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())  
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true                         
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highLightMatch = (text, filter) =>{
    if(!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, i) =>{
      if(substring.toLowerCase() === filter.toLowerCase()){
        return(
          <span key={i} className="highlight">
            {substring}
          </span>
        )
    }
    return substring
  
  })
  }
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul className="book-list">
          {filteredBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
               {++index} {highLightMatch(book.title, titleFilter)} by <strong>{highLightMatch(book.author, authorFilter)}</strong>
               ({book.source})
               
                </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>

                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : <BsBookmarkStar className="star-icon" />}

                </span>
              
                <button onClick={() => deleteBookHandler(book.id)}>Delete</button>
              </div>
            </li>

          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList