import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks,handleMarkAsRead}) => {


    const [blogs,setBlogs] = useState([]);

    useEffect(() => {

        fetch('blog.json')
        .then(res=>res.json()
    .then(data =>setBlogs(data)));
    } , [])


    return (
        <div className='w-2/3'>
            <h3>Blogs:{blogs.length}</h3>

           <div>
           {
              
              blogs.map(blog => <Blog
                handleBookmarks={handleBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                 key={blog.id} 
                  blog={blog}></Blog>)

            }
           </div>
        </div>
    );
};

export default Blogs;