
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 mx-4 border-b-2'>
             <h1 className="text-3xl font-bold">Knowladge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;