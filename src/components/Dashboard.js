import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/userActions';
import { Link } from 'react-router-dom';

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
      <div className='w-full h-screen bg-slate-100 p-4'>

        { (user?.isLoggedIn == true) ? <div className='dashboard'>
          <div className='w-full flex h-auto'>

            <div className='mt-20 border-2 border-slate-500 relative flex w-9/2 md:w-3/5 h-56 md:h-72 mr-2 mx-auto rounded-md'>

            </div>
            <div className='mt-20 border-2 border-slate-500 relative flex w-9/2 md:2/5 h-56 md:h-72 mx-auto rounded-md'>

            </div>

          </div>
          <div>

          </div>

        </div> : 

        // NOT LOGGED PAGE

        <div className='w-full h-screen flex'>
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