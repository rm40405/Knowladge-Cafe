import BookMark from "../BookMark/BookMark";


const BookMarks = ({bookmarks,markAsread}) => {
    return (
        <div className='w-1/3'>
            <div>
                BookMarksTime:{markAsread}
            </div>
        <h4 >BookMarks:{bookmarks.length}</h4>
        <div className="bg-gray-700 ml-6" >
            {
                bookmarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark} ></BookMark>)
            }
        </div>
        </div>
    );
};

export default BookMarks;