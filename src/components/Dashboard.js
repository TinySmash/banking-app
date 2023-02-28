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
          <div className='w-full grid gap-4 grid-cols-2 md:grid-cols-3 grid-rows-2 h-auto mt-14'>

            <div className='border-2 border-slate-500 block text-center rounded-md'>
              <h1 className='balance text-2xl font-medium w-auto mx-auto mt-9 md:mt-20 md:font-semibold'>Personal balance</h1>
              <h1 className="balance text-3xl mt-6">0 $</h1>
            </div>
            <div className='border-2 border-slate-500 flex justify-start items-start rounded-md p-1 py-2 md:col-span-2'>
              <div className='all-acc block relative h-full w-full md:w-1/2 lg:w-1/3 p-2 '>
                <label className='text-lg sm:text-xl border-b-2 border-slate-500 cursor-pointer mr-5'>Transactions history</label>
                
                  {(user?.BankAccount?.transactions?.length == 0) ?
                    <h1 className='flex text-3xl mx-auto md:ml-8 w-8 mt-5'>--</h1>
                  :
                    <ul className='list-none'>
                      {user?.BankAccount?.transactions?.map(e => {
                        return <li>Transaction {user?.BankAccount?.transactions?.indexOf(e)}</li>
                      })}
                    </ul>
                  }
                  
              </div>

              <div className='all-acc hidden relative md:block h-full w-1/3 p-2'>
                <label className='text-lg sm:text-xl border-b-2 border-slate-500 cursor-pointer'>Onhold currencies</label>
                
              </div>
            </div>
            <div className='flex py-8 h-56 md:h-[16rem] col-start-1 col-end-3 md:col-end-4 border-2 border-slate-500 justify-evenly rounded-md'>
              <div className='block relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36'>
                <ProgressBar percentage={45.2} count={1}/>
                <h1 className='text-md md:text-lg font-semibold bottom-[-45px] mt-4 text-center'>Assets spent</h1>
              </div>
              <div className='w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36'>
                <ProgressBar percentage={2.15} count={2} sign="+"/>
                <h1 className='text-md md:text-lg font-semibold bottom-[-45px] mt-4 text-center'>Market flow</h1>
              </div>
              <div className='hidden sm:block sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36'>
                <ProgressBar percentage={85} count={3}/>
                <h1 className='text-md md:text-lg font-semibold bottom-[-45px] mt-4 text-center'>Assets spent</h1>
              </div>
              <div className='hidden md:block md:w-32 md:h-32 lg:w-36 lg:h-36'>
                <ProgressBar percentage={25} count={4}/>
                <h1 className='text-md md:text-lg font-semibold bottom-[-45px] mt-4 text-center'>Assets spent</h1>
              </div>
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
        currentUser : state.user
    }
}

export default connect(mapUserStateToProps, { getUserInfo })(Dashboard);