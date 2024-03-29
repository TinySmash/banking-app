import React, {useEffect , useState} from 'react'
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/userActions'

function Navbar(props) {

  let menuOpened = false;
  function openMenu() {
    const menu = document.querySelector('.burger-options-menu');
    const menuList = document.querySelector('.menu-list');
    if(menuOpened == false) {
      menu.classList.remove('burger-closed-menu');
      menu.classList.remove('hidden');
      menu.classList.add('block');
      menu.classList.add('burger-opened-menu')
      menuList.classList.remove('menu-list-closed')
      menuList.classList.add('menu-list-opened')
      menuOpened = true
    }else if(menuOpened == true) {
      menu.classList.add('burger-closed-menu')
      menu.classList.remove('burger-opened-menu')
      menuList.classList.add('menu-list-closed')
      menuList.classList.remove('menu-list-opened')
      menuOpened = false
    }
  }

  //   NAVIGATION SYSTEM
  
  const navigate = useNavigate();
  const { getUserInfo } = props;
  const [userState, setUserState] = useState(null);

  
  useEffect(() => {
    getUserInfo();
    if(props?.userInfo?.isLoggedIn == true) {
      setUserState(['profile','dashboard','wallet']);
    } else {
      setUserState(['sign-in','sign-in','sign-in']);
    }
  },[props?.userInfo])

  return (
    <header className='flex fixed h-12 w-full p-8 sm:pr-16 bg-red-500 justify-between items-center z-50'>
        <h1 className="title text-3xl font-bold text-slate-100">MonoCash</h1>
        <nav className='hidden md:flex w-5/12 '>
            <ul className='w-full flex justify-between'>
                <li className='no-underline text-slate-100 hover:text-slate-400 cursor-pointer'><h1 href="" onClick={() => navigate("/")}>Home</h1></li>
                <li className='no-underline text-slate-100 hover:text-slate-400 cursor-pointer'><h1 href="" onClick={() => navigate(`/${userState?.[1]}`)}>Dashboard</h1></li>
                <li className='no-underline text-slate-100 hover:text-slate-400 cursor-pointer'><h1 href="" onClick={() => navigate(`/${userState?.[0]}`)}>Profile</h1></li>
                <li className='no-underline text-slate-100 hover:text-slate-400 cursor-pointer'><h1 href="" onClick={() => navigate(`/${userState?.[2]}`)}>Wallet</h1></li>
            </ul>
        </nav>
        <button className='flex md:hidden w-10 h-10 border-2 border-slate-100 border-radius-5 rounded items-center justify-center' onClick={openMenu}>
            <div className="burger-menu w-8 h-1 before:w-8 before:h-1 before:border-slate-100 before:rounded-md after:rounded-md after:border-slate-100 after:w-8 after:h-1 border-2 border-slate-100 rounded-md"></div>
        </button>
        <div className='burger-options-menu hidden md:hidden absolute right-0 sm:right-7 top-16 w-28 h-32 border-2 border-red-500 rounded-b-md bg-red-500'>
          <ul className='menu-list menu-list-closed'>
            <li className='menu-options no-underline text-slate-100 hover:text-slate-400 ml-5 mt-0 cursor-pointer'><h1 href="" onClick={() => navigate("/")}>Home</h1></li>
            <li className='menu-options no-underline text-slate-100 hover:text-slate-400 ml-5 mt-2 cursor-pointer'><h1 href="" onClick={() => navigate(`/${userState?.[1]}`)}>Dashboard</h1></li>
            <li className='menu-options no-underline text-slate-100 hover:text-slate-400 ml-5 mt-2 cursor-pointer'><h1 href="" onClick={() => navigate(`/${userState?.[0]}`)}>Profile</h1></li>
            <li className='menu-options no-underline text-slate-100 hover:text-slate-400 ml-5 mt-2 cursor-pointer'><h1 href="" onClick={() => navigate(`/${userState?.[2]}`)}>Wallet</h1></li>
          </ul>
        </div>
    </header>
  )
}

const mapUserInfoToProps = (state) => {
  return {
    userInfo : state.user.loginInfo
  }
}

export default connect(mapUserInfoToProps, {getUserInfo})(Navbar)