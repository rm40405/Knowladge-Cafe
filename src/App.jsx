
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/BookMarks/BookMarks'
import Header from './component/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]) 
  const [markAsread,setMarkasread] = useState(0)

  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)  // update the bookmarks state with the new one
  }
    const handleMarkAsRead = time => {
      const newMarkread = (markAsread + time);
      setMarkasread(newMarkread);  // update the markAsread state with the new one
    }
  return (
    <>
      
     <Header></Header>
     <main className='md:flex flex mx-4 p-4 '>
      <Blogs
      handleBookmarks={handleBookmarks}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <BookMarks

      markAsread={markAsread}
      bookmarks={bookmarks}
      
      ></BookMarks>
     </main>
      
    </>
  )
}

export default App
