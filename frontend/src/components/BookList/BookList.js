import { useSelector } from "react-redux"
import '../BookList/BookList.css'
import { useDispatch } from "react-redux"
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectTitleFilter ,selectAuthorFilter} from "../../redux/slices/FilterSlice";

const BookList = () => {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
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
    return matchesTitle && matchesAuthor
  })
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
               {++index} {book.title} by <strong>{book.author}</strong>
               
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