import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/userActions';

class Dashboard extends Component {

    state = {
        user: {

        }
    }

    componentDidMount(){
        this.props.getUserInfo();
    }

  render() {

    const { user } = this.state;

    console.log(this.props)

    return (
      <div className='w-full h-screen bg-slate-100'>
        { (user?.isLoggedIn == true) ? <div className='dashboard'>

        </div> : 
        <div>

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