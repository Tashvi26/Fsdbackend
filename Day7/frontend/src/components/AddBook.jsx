import React from 'react'
import axios from 'axios'
const AddBook = () => {
    const handleadd= async (e)=>{
        e.preventDefault();
        const title=e.target.title.value;
        const author=e.target.author.value;
        const date=e.target.date.value;
        const image=e.target.image.value;
        const book={title,author,date,image}
        await axios.post('https://fsdbackend-kz0g.onrender.com/books',book)
        alert('Book Added ')
    }
  return (
    <div>
      <h1>Add Book Details</h1>
      <form className='formCon' onSubmit={handleadd}>
        Title: <input className='inp' type='text' name='title' required/>
        Author: <input className='inp' type='text' name='author' required/>
        Date: <input className='inp' type='date' name='date' required/>
        Image URL: <input className='inp' type='text' name='image' required/>
      <button className='but' type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook