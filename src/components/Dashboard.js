import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/userActions';
import { Link } from 'react-router-dom';
import ProgressBar from './progressBar';

class Dashboard extends Component {

    state = {
        user: {

        }
    }

    componentDidMount(){
        this.props.getUserInfo();
        this.setState({
          user : this.props.currentUser
        })
    }

  render() {

    const { user } = this.state;


    return (
      <div className='w-full h-auto bg-slate-100 p-4'>

        { (user?.loginInfo?.isLoggedIn == true) ? <div className='dashboard'>
          <div className='w-full flex h-auto mt-14'>

            <div className='border-2 border-slate-500 relative block text-center w-9/2 md:w-1/5 md:min-w-72 h-56 md:h-72 mr-2 mx-auto rounded-md'>
              <h1 className='balance text-2xl font-medium w-auto mx-auto mt-9 md:mt-20 md:font-semibold'>Personal balance</h1>
              <h1 className="balance text-3xl mt-6">0 $</h1>
            </div>
            <div className='border-2 border-slate-500 relative flex justify-start items-start w-9/2 md:w-4/5 h-56 md:h-72 mx-auto rounded-md p-1'>
              <div className='all-acc block h-full w-full max-w-[16rem] p-2'>
                <label className='text-lg sm:text-xl border-b-2 border-slate-500 cursor-pointer'>Transactions history</label>
                <ul className='list-none'>

                </ul>
              </div>
            </div>

          </div>
          <div className='mt-2 p-2 border-2 border-slate-500 relative flex justify-evenly w-full h-56 md:h-64 mx-auto rounded-md'>
            <div className='w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36'>
              <ProgressBar percentage={15} count={1}/>
            </div>
            <div className='w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36'>
              <ProgressBar percentage={65} count={2}/>
            </div>
            <div className='hidden sm:flex sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36'>
              <ProgressBar percentage={85} count={3}/>
            </div>
            <div className='hidden md:flex md:w-32 md:h-32 lg:w-36 lg:h-36'>
              <ProgressBar percentage={25} count={4}/>
            </div>
          </div>

        </div> : 

        // NOT LOGGED PAGE

        <div className='w-full h-screen block mt-24'>
          <h1 className="text-xl text-red-500">You are not logged yet</h1>
          <Link to="log-in"> Login here </Link>
        </div>
        }
      </div>
    )
  }
}

const mapUserStateToProps = (state) => {
    return {
        currentUser : state.user.user
    }
}

export default connect(mapUserStateToProps, { getUserInfo })(Dashboard);