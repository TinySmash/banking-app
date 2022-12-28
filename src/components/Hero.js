import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="">
      <section className='Hero w-full h-screen block md:flex'>
          <img src="money.png" className="relative flex w-3/5 center-h mt-16 sm:w-1/2 sm:left-0 sm:translate-x-0 sm:ml-4 md:w-6/12 md:mt-24 md:mr-16 lg:w-5/12"></img>
          <div className="titles static w-full p-10 md:w-5/12 md:mt-56 ">
            <h1 className="title text-4xl font-bold">Earn, Store, send money with <span className='bg-red-500 rounded-xl text-slate-100'>MonoCash</span></h1>
            <h2 className="subtitle text-2xl text-gray-800 mt-3">Most popular trading & banking platform in your hands</h2>
          </div>
      </section>
      <section className='h-auto block bg-red-500 p-10 md:p-26 md:flex md:flex-wrap lg:pt-16 lg:pb-10 lg:h-screen'>
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
      <section className='w-full h-h-auto block p-8 bg-slate-100 md:justify-around '>
        <div className='w-full h-auto block md:flex md:pr-24'>
          <img src="bank.png" alt="" className='w-2/3 m-auto md:w-2/5 md:mt-0 lg:w-1/3 md:ml-0'/>
          <p className='font-bold md:w-2/5 md:mt-16 md:text-2xl lg:text-3xl lg:mt-24'>Send and receive cash to anywhere in the world within less than 5min with <span className='bg-red-500 text-slate-100 rounded'>MonoCash</span>,
          with +24 currecies supported including cryptocurrencies and NFT's. your wallet is in your pocket.</p>
        </div>
        <div className='block w-full mt-10 h-auto m-auto md:flex md:justify-evenly md:items-center md:mt-16'>
        <button className='m-auto bg-purple-500 w-full rounded-xl pt-3 pb-3 mt-3 text-xl font-bold text-slate-100 md:w-2/5'>Profile</button>
        <br />
        <button className='m-auto bg-red-500 w-full rounded-xl pt-3 pb-3 mt-3 text-xl font-bold text-slate-100 md:w-2/5'>Wallet</button> 
        </div>
      </section>
      <section className='w-full h-auto p-10 bg-gray-900 flex justify-center'>
        <div className="border-t-2 w-full flex justify-between md:w-2/3">
          <h3 className='text-slate-100'>MonoCash© 2021</h3>
          <h4 className='text-slate-100'>All rights reserved</h4>
        </div>
      </section>
    </div>
  )
}

export default Hero;