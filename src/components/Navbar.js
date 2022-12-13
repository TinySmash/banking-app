import React from 'react'

export default function Navbar() {
  return (
    <header className='flex fixed h-12 w-full p-8 sm:pr-16 bg-red-500 justify-between items-center z-50'>
        <h1 className="title text-3xl font-bold text-slate-100">MonoCash</h1>
        <nav className='hidden sm:flex w-5/12 '>
            <ul className='w-full flex justify-between'>
                <li className='no-underline text-slate-100 hover:text-slate-400'><a href="">Home</a></li>
                <li className='no-underline text-slate-100 hover:text-slate-400'><a href="">Market</a></li>
                <li className='no-underline text-slate-100 hover:text-slate-400'><a href="">Profile</a></li>
            </ul>
        </nav>
        <button className='flex sm:hidden w-10 h-10 border-2 border-slate-100 border-radius-5 rounded items-center justify-center'>
            <div className="burger-menu w-8 h-1 before:w-8 before:h-1 before:border-slate-100 before:rounded-md after:rounded-md after:border-slate-100 after:w-8 after:h-1 border-2 border-slate-100 rounded-md"></div>
        </button>
    </header>
  )
}
