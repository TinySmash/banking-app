import React from 'react'

export default function Hero() {
  return (
    <section className='Hero w-full h-screen block md:flex'>
        <img src="money.png" className="relative flex w-4/5 center-h mt-16 sm:w-2/3 sm:left-0 sm:translate-x-0 sm:ml-4 md:w-1/2 md:mt-24 "></img>
        <div className="titles relative w-full p-10 md:w-2/5 md:mt-56 ">
          <h1 className="title text-4xl font-bold">Earn, Store, send money with <span className='bg-red-500 rounded-xl text-slate-100'>MonoCash</span></h1>
          <h2 className="subtitle text-2xl text-gray-800">Most popular trading & banking platform in your hands</h2>
        </div>

    </section>
  )
}
