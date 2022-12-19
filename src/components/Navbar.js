import React from 'react'

export default function Navbar() {

  let menuOpened = false;
  function openMenu() {
    let menu = document.querySelector('.burger-opened-menu');
    if(menuOpened == false) {
      menu.classList.remove('hidden');
      menu.classList.add('block');
      menu.classList.add('burger-opened-menu')
      
      menuOpened = true
    }else if(menuOpened == true) {
      menu.classList.add('hidden')
      menu.classList.remove('block')
      menuOpened = false
    }
  }

  return (
    <header className='flex fixed h-12 w-full p-8 sm:pr-16 bg-red-500 justify-between items-center z-50'>
        <h1 className="title text-3xl font-bold text-slate-100">MonoCash</h1>
        <nav className='hidden sm:flex w-5/12 '>
            <ul className='w-full flex justify-between'>
                <li className='no-underline text-slate-100 hover:text-slate-400'><a href="">Home</a></li>
                <li className='no-underline text-slate-100 hover:text-slate-400'><a href="">Profile</a></li>
                <li className='no-underline text-slate-100 hover:text-slate-400'><a href="">Wallet</a></li>
            </ul>
        </nav>
        <button className='flex sm:hidden w-10 h-10 border-2 border-slate-100 border-radius-5 rounded items-center justify-center' onClick={openMenu}>
            <div className="burger-menu w-8 h-1 before:w-8 before:h-1 before:border-slate-100 before:rounded-md after:rounded-md after:border-slate-100 after:w-8 after:h-1 border-2 border-slate-100 rounded-md"></div>
        </button>
        <ul className='hidden sm:hidden absolute right-0 top-16 w-28 h-28 border-2 border-red-500 rounded-b-md bg-red-500'>
          <li className='no-underline text-slate-100 hover:text-slate-400 ml-7 mt-2'><a href="">Home</a></li>
          <li className='no-underline text-slate-100 hover:text-slate-400 ml-7 mt-2'><a href="">Profile</a></li>
          <li className='no-underline text-slate-100 hover:text-slate-400 ml-7 mt-2'><a href="">Wallet</a></li>
        </ul>
    </header>
  )
}
