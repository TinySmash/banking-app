import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
      <div className='block w-full h-screen'>
        <div className='w-2/3 h-124 block border-2 border-slate-500 m-auto mt-20 rounded-3xl p-8 px-10'>
          <h1 className='relative w-32 m-auto text-3xl font-mono font-bold '>Sign-In</h1>
          <div className='inputs relative block w-full h-92 mt-5'>
            <form className='relative block w-full h-auto'>
              <label for="username" className='w-auto font-bold ml-5'>username</label>
              <br />
              <input type="text" className='w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3'/>
              <form className='relative block w-full h-auto mt-5'>
              <label for="E-mail" className='w-auto font-bold ml-5'>E-mail</label>
              <br />
              <input type="text" className='w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3'/>
            </form>
            <form className='relative block w-full h-auto mt-5'>
              <label for="password" className='w-auto font-bold ml-5'>password</label>
              <br />
              <input type="password" className='w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3'/>
            </form>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;