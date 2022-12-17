import React from 'react'

export default function Hero() {
  return (
    <div className="">
      <section className='Hero w-full h-screen block md:flex'>
          <img src="money.png" className="relative flex w-4/5 center-h mt-16 sm:w-2/3 sm:left-0 sm:translate-x-0 sm:ml-4 md:w-6/12 md:mt-24 md:mr-16"></img>
          <div className="titles static w-full p-10 md:w-5/12 md:mt-56 ">
            <h1 className="title text-4xl font-bold">Earn, Store, send money with <span className='bg-red-500 rounded-xl text-slate-100'>MonoCash</span></h1>
            <h2 className="subtitle text-2xl text-gray-800">Most popular trading & banking platform in your hands</h2>
          </div>
      </section>
      <section className='h-auto block pb-4 bg-red-500 p-10 md:p-26 md:flex md:flex-wrap lg:pt-16 lg:pb-10'>
        <div className='w-full h-min bg-slate-100 rounded-xl flex justify-evenly items-center lg:w-9/2 p-4 ml-auto mr-auto mb-8'>
          <img src="cash.png" alt="" className='w-36 sm:w-44'/>
          <h1 className=" font-bold text-2xl text-red-500 sm:text-4xl">Fast and secure online transfer</h1>
        </div>
        <div className='w-full h-min bg-slate-100 rounded-xl flex justify-evenly items-center lg:w-9/2 p-4 ml-auto mr-auto mb-8'>
          <img src="shield.png" alt="" className='w-36 sm:w-44'/>
          <h1 className=" font-bold text-2xl text-red-500 sm:text-4xl">First trusted & certified platform</h1>
        </div>
        <div className='w-full h-min bg-slate-100 rounded-xl flex mb-8 justify-evenly items-center lg:w-9/2 p-4 ml-auto mr-auto'>
          <img src="globe.png" alt="" className='w-36 sm:w-44'/>
          <h1 className=" font-bold text-2xl text-red-500 sm:text-4xl">Send to anywhere in less than 5 minutes</h1>
        </div>
        <div className='w-full h-min bg-slate-100 rounded-xl flex justify-evenly items-center lg:w-9/2 p-4 ml-auto mr-auto mb-8'>
          <img src="tax.png" alt="" className='w-36 sm:w-44'/>
          <h1 className=" font-bold text-2xl text-red-500 sm:text-4xl">100% tax free service (We don't take fees)</h1>
        </div>

      </section>
    </div>
  )
}
