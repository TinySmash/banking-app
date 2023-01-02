import React, { Component } from 'react'

class ProgressBar extends Component {
  render() {
    return (
      <div className='progress progress-container w-full h-full rounded-full flex justify-center items-center'>
        <div className="progress progress-value w-3/4 h-3/4 rounded-full bg-slate-100 flex justify-center items-center">
            <h1>65%</h1>
        </div>
      </div>
    ) 
  }
}


export default ProgressBar;