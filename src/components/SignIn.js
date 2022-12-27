import React, { Component } from 'react'
import eye from './images/eye.png'
import eyeOff from './images/eye-off.png'
import Google from './images/google.png'
import manSitting from './images/man-sitting.png'

class SignIn extends Component {

  state = {
    user : {
      username : '',
      email : '',
      password : ''
    }
  }

  componentDidUpdate(){
    console.log(this.state.user)
  }

  render() {

    // PASSWORD INPUT 

    var showPassword = false;
    var eyeIcon = eye;

    function displayPassword(e) {
      e.preventDefault();
      const passwordInput = document.querySelector('.password-input');
      const eyeImg = document.querySelector('.eye-img');
      console.log("Change eye")
      if(showPassword == false) {
        eyeIcon = eyeOff;
        showPassword = true;
        passwordInput.setAttribute('type', 'text');
      }
      else if(showPassword == true) {
        eyeIcon = eye;
        showPassword = false;
        passwordInput.setAttribute('type', 'password');
      }
      eyeImg.setAttribute('src', eyeIcon)
    }

    // VALIDATION SYSTEM
    
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordPattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;
    const {user} = this.state ;


    const getInputToState = (e, inputField) => {
      e?.preventDefault();
      switch(inputField){
        case 'username':
          this.setState(prevState => {
            let username = Object.assign({}, prevState.user.username)
            username = e.target.value;
            return {user};
          })
          case 'email':
            this.setState(prevState => {
              let user = Object.assign({}, prevState.user)
              user.email = e.target.value;
              return {user};
            })
          case 'password':
            this.setState(prevState => {
              let user = Object.assign({}, prevState.user)
              user.password = e.target.value;
              return {user};
            })
          default :
            return null
      }
    }

    return (
      <div className='block w-full h-screen md:flex md:justify-between md:items-center'>
        <img src={manSitting} alt="" className='w-1/3 max-w-sm hidden md:flex mt-16'/>
        <div className='w-3/4 max-w-sm h-124 relative block border-2 border-slate-500 m-auto mt-24 rounded-3xl p-6 px-9 md:right-0'>
          <h1 className='relative w-32 m-auto text-3xl font-mono font-bold '>Sign-In</h1>
          <div className='inputs relative block w-full h-92 mt-5'>
            <form className='relative block w-full h-auto'>
              <label for="username" className='w-auto font-bold ml-5'>username</label>
              <br />
              <input type="text" onChange={(e) => { getInputToState(e, 'username') }} className='username-input w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3 focus:outline-none'/>
            </form>
            <form className='relative block w-full h-auto mt-5'>
              <label for="E-mail" className='w-auto font-bold ml-5'>E-mail</label>
              <br />
              <input type="text" onChange={(e) => { getInputToState(e, 'email') }} className='w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3 focus:outline-none'/>
            </form>
            <form className='relative block w-full h-auto mt-5'>
              <label for="password" className='email-input w-auto font-bold ml-5'>password</label>
              <br />
              <div className='flex justify-between border-2 border-slate-500 rounded-xl p-0 pr-1'>
                <input type="password" onChange={(e) => { getInputToState(e, 'password') }} className='password-input w-5/6 h-7 bg-transparent rounded-xl pl-3 focus:outline-none'/>
                <button onClick={(e) => displayPassword(e) } alt=""  className='relative w-7 h-7 cursor-pointer focus:outline-none'>
                  <img src={eyeIcon} alt="" className='eye-img'/>
                </button>
              </div>
            </form>
          </div>

          <div className="w-full block mt-3 px-2">
            <a href="" className='text-sm text-purple-800 underline'>Forgot password ?</a>
            <span className='flex w-full items-center mt-1 mx-auto'>
              <h4 className='text-sm mr-2'>Already have an account?</h4>
              <a href="" className='text-red-500 underline'>Login</a>
            </span>
          </div>

          <button className='border-2 border-red-500 w-4/5 ml-tenth mt-2 rounded-lg bg-red-500 text-slate-100 font-bold py-1' >Sign In</button>
          <button className='flex relative w-full justify-between border-2 border-slate-500 rounded-xl p-0 pr-1 items-center mt-4'>
                <h3 className='px-4 font-semibold'>Login with Google</h3>
                  <img src={Google} alt="" className='w-8 h-8 mr-4 '/>
          </button>

        </div>
      </div>
    )
  }
}

export default SignIn;