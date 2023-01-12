import React, { Component } from 'react'
import eye from './images/eye.png'
import eyeOff from './images/eye-off.png'
import Google from './images/google.png'
import Xicon from './images/x.png'
import manSitting from './images/man-sitting.png'
import { connect } from 'react-redux';
import { storeUserInfo } from '../actions/userActions'
import { Link } from 'react-router-dom';




class SignIn extends Component {

  state = {
    userLoginInfo : {
      isLoggedIn: false,
      username : '',
      email : '',
      password : ''
    }
  }



   

  render() {


    // PASSWORD INPUT 

    var showPassword = false;
    var eyeIcon = eye;

    function displayPassword(e) {
      e.preventDefault();
      const passwordInput = document.querySelector('.password-input');
      const eyeImg = document.querySelector('.eye-img');
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
    const {userLoginInfo} = this.state ;
    const { storeUserInfo } = this.props;


    const getInputToState = (e, inputField) => {
      e?.preventDefault();
      usernameInputBorder?.classList.add('border-slate-500');
      usernameInputBorder?.classList.remove('border-red-600');
      emailInputBorder?.classList.add('border-slate-500');
      emailInputBorder?.classList.remove('border-red-600');
      passwordInputBorder?.classList.add('border-slate-500');
      passwordInputBorder?.classList.remove('border-red-600');
      allErr.forEach((e) => {
        e?.classList?.add('hidden');
      })
      switch(inputField){
        case 'username':
          this.setState({...userLoginInfo.username = e.target.value})
          break
          case 'email':
            this.setState({...userLoginInfo.email = e.target.value})
            break
            case 'password':
              this.setState({...userLoginInfo.password = e.target.value})
              break
              default :
              return null
            }
    }

    const allErr = document.querySelectorAll('.err-msg');
    const usernameErrMsg = document.querySelector('.username-err');
    const emailErrMsg = document.querySelector('.email-err');
    const passwordErrMsg = document.querySelector('.password-err');
    const usernameInputBorder = document.querySelector('.username-input-border');
    const emailInputBorder = document.querySelector('.email-input-border');
    const passwordInputBorder = document.querySelector('.password-input-border');
    const SignInMsg = document.querySelector('.sign-msg');
    const Form = document.querySelector('.form');

    const SignIn = (e) => {
      e?.preventDefault()
      if(usernamePattern?.test(this.state.userLoginInfo.username) && emailPattern?.test(this.state.userLoginInfo.email) && passwordPattern?.test(this.state.userLoginInfo.password)) {
        this.setState({...userLoginInfo.isLoggedIn = true})
        storeUserInfo(userLoginInfo);
        SignInMsg.classList.add('block');
        SignInMsg.classList.remove('hidden');
        Form.classList.add('opacity-30');
      }
      if(usernamePattern?.test(userLoginInfo.username) == false){
        usernameErrMsg?.classList.remove('hidden')
        usernameInputBorder?.classList.remove('border-slate-500');
        usernameInputBorder?.classList.add('border-red-600');
      }
      if(emailPattern?.test(userLoginInfo.email) == false){
        emailErrMsg?.classList.remove('hidden')
        emailInputBorder?.classList.remove('border-slate-500');
        emailInputBorder?.classList.add('border-red-600');
      }
      if(passwordPattern?.test(userLoginInfo.password) == false){
        passwordErrMsg?.classList.remove('hidden')
        passwordInputBorder?.classList.remove('border-slate-500');
        passwordInputBorder?.classList.add('border-red-600');
      }
    }

    // CLOSE SIGN IN MESSAGE

    const closeSignInMsg = (e) => {
      e?.preventDefault();
      SignInMsg.classList.remove('block');
      SignInMsg.classList.add('hidden');
      Form.classList.remove('opacity-30');
    }

    return (
      <div className='block w-full h-screen md:flex md:justify-between md:items-center'>
        <div className='sign-msg hidden absolute align-middle mt-44 md:mt-12 w-4/5 max-w-xl h-64 border-2 border-slate-500 rounded-xl bg-neutral-200 z-20 center-h m-auto'>
          <button className='block absolute w-7 h-7 right-3 top-2' onClick={(e) => closeSignInMsg(e)}>
            <img src={Xicon} alt="" />
          </button>
          <h1 className='relative block ml-10 md:ml-36 mt-8 text-2xl text-emerald-500 font-semibold'>You Signed In successfully</h1>
          <Link to="/dashboard" className='flex relative border-2 border-red-500 w-3/5 px-5 py-2 justify-center mx-auto mt-20 bg-red-500 font-semibold text-xl text-slate-100 rounded-lg'>Go to Dashboard</Link>
        </div>
        <img src={manSitting} alt="" className='w-1/3 max-w-sm hidden md:flex mt-16'/>
        <div className='form w-3/4 max-w-sm h-124 relative block border-2 border-slate-500 m-auto mt-24 rounded-3xl p-6 px-9 md:right-0'>
          <h1 className='relative w-32 m-auto text-3xl font-mono font-bold '>Sign-In</h1>
          <div className='inputs relative block w-full h-92 mt-5'>
            <form className='relative block w-full h-auto'>
              <label for="username" className='w-auto font-bold ml-5'>username</label>
              <br />
              <input type="text" onChange={(e) => { getInputToState(e, 'username') }} className='username-input-border username-input w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3 focus:outline-none'/>
              <h6 className='err-msg username-err hidden absolute p-0 ml-4 text-red-600 font-semibold'>unvalid username</h6>
            </form>
            <form className='relative block w-full h-auto mt-5'>
              <label for="E-mail" className='w-auto font-bold ml-5'>E-mail</label>
              <br />
              <input type="text" onChange={(e) => { getInputToState(e, 'email') }} className='email-input-border w-full h-8 bg-transparent border-2 border-slate-500 rounded-xl pl-3 focus:outline-none'/>
              <h6 className='err-msg email-err hidden absolute p-0 ml-4 text-red-600 font-semibold'>invalid e-mail</h6>
            </form>
            <form className='relative block w-full h-auto mt-5'>
              <label for="password" className='email-input w-auto font-bold ml-5'>password</label>
              <br />
              <div className='password-input-border flex justify-between border-2 border-slate-500 rounded-xl p-0 pr-1'>
                <input type="password" onChange={(e) => { getInputToState(e, 'password') }} className='password-input w-5/6 h-7 bg-transparent rounded-xl pl-3 focus:outline-none'/>
                <button onClick={(e) => displayPassword(e) } alt=""  className='relative w-7 h-7 cursor-pointer focus:outline-none'>
                  <img src={eyeIcon} alt="" className='eye-img'/>
                </button>
              </div>
              <h6 className='err-msg password-err hidden absolute p-0 ml-4 text-red-600 font-semibold'>invalid password</h6>
            </form>
          </div>

          <div className="w-full block mt-7 px-2">
            <a href="" className='text-sm text-purple-800 underline'>Forgot password ?</a>
            <span className='flex w-full items-center mt-1 mx-auto'>
              <h4 className='text-sm mr-2'>Already have an account?</h4>
              <a href="" className='text-red-500 underline'>Login</a>
            </span>
          </div>

          <button className='border-2 border-red-500 w-4/5 ml-tenth mt-2 rounded-lg bg-red-500 text-slate-100 font-bold py-1' onClick={(e) => SignIn(e)}>Sign In</button>
          <button className='flex relative w-full justify-between border-2 border-slate-500 rounded-xl p-0 pr-1 items-center mt-4'>
                <h3 className='px-4 font-semibold'>Login with Google</h3>
                  <img src={Google} alt="" className='w-8 h-8 mr-4 '/>
          </button>

        </div>
      </div>
    )
  }
}

const mapUserStateToProps = (state) => {
  return {
    user: state.user || [],
  }
}


export default connect(mapUserStateToProps, { storeUserInfo })(SignIn);