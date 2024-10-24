
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
      
    const {title,cover,author,authorImg,reading_time,posted_date,hashtags} = blog;
    // console.log(blog);
    // console.log(hashtags)
    return (
        <div >
            
            <img className='rounded-2xl mt-3' src={cover} alt="" />
          <div className='flex justify-between p-4'>
          
          <div className='flex gap-3'>
           <img className='w-[50px]' src={authorImg} alt="" />
           <div><h3>{author}</h3>
           <p>{posted_date}</p>

           </div>

           </div >
            

            <div className='flex gap-3'>
            <p className='mt-4'>{reading_time} min read</p>
            <button 
            onClick={() =>handleBookmarks(blog)}
             ><FaBookmark></FaBookmark></button>
            
            </div>
            
          </div>
          <h2 className='text-2xl font-bold'>{title}</h2>
            
            <button 
            onClick={() =>handleMarkAsRead(reading_time)}
            
            className='text-purple-700 underline'>mark as read</button>

            <p>
                {
              hashtags?.map((hash, idx)=>(
                <span key={idx}  ><a >{hash}</a></span>
              ))
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired
}

export default Blog;