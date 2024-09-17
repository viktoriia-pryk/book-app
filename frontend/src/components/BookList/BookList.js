import { useSelector } from "react-redux"
import '../BookList/BookList.css'
import { useDispatch } from "react-redux"
import { deleteBook } from "../../redux/books/actionCreators"
const BookList = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const deleteBookHandler = (id) =>{
    console.log(id);
    
    dispatch(deleteBook(id))

  }
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
               {++index} {book.title} by <strong>{book.author}</strong>
               
                </div>
              <div className="book-actions">
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