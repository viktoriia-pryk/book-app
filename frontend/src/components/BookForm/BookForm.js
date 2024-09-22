
import {useState} from 'react'
import './BookForm.css'
import axios from 'axios'
import { addBook } from '../../redux/slices/booksSlice'
import { useDispatch } from 'react-redux'
import  {createBookWithID} from '../../utils/createBookWithID'
import booksData from '../../data/books.json'



const BookForm = () => {
 const [title, setTitle] = useState('')
 const [author, setAuthor] = useState('')
 const dispatch = useDispatch()
 const handleAddRandomBook = () =>{
   const randomIndex = Math.floor(Math.random() * booksData.length)
   const randomBook = booksData[randomIndex]
   const randomBookWithId = createBookWithID(randomBook,'random')

   dispatch(addBook(randomBookWithId))
   
  

 }

 const handleSubmit = (e)=>{
  e.preventDefault()
  if(title && author){
  const book= createBookWithID({ title, author},'manual')

  dispatch(addBook(book))
    setTitle('')
    setAuthor('')
    
  }
  
 }
 const handleAddRandomBookViaAPI =  async () =>{

  try {

    const response = await axios.get('http://localhost:4000/random-book')
    if (response?.data?.title && response?.data?.author) {
      dispatch(addBook(createBookWithID(response.data, 'API')))
    }
    
  } catch (error) {
    console.log('Error fetching random book', error);
    
    
  }
  
  
 }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='author'>Author:</label>
          <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <button>Add Book</button>
        <button type='button' onClick={handleAddRandomBook}>Add Random</button>
        <button type='button' onClick={handleAddRandomBookViaAPI}>Add book via API</button>

      </form>

    </div>
  )
}

export default BookForm