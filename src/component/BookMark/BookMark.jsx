

const BookMark = ({bookMark}) => {
    const {title}=bookMark;
    return (
        <div className="bg-slate-400 m-4 p-5">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

export default BookMark;
