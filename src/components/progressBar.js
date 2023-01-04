import React, { Component } from 'react'

class ProgressBar extends Component {


  render() { 

      let progressContainer = document.querySelector('.progress-container');
      let valueContainer = document.querySelector('.progress-value');
      const speed = 20;
      let progressValue = 0;
      //let progressEndValue = 70;

      function updateElements() {
        valueContainer = document.querySelector('.progress-value');
        progressContainer = document.querySelector('.progress-container');
      }

      const createProgress = setInterval(() => {
        updateElements();
        valueContainer.innerText = `${progressValue} %`
        progressContainer.style.background = `conic-gradient(
          rgb(239 68 68) ${progressValue*3.6}deg,
          black 1deg,
          rgb(251, 202, 202)  1deg
          )`
          
          if (progressValue == this.props.percentage) {
            clearInterval(createProgress);
          }
          progressValue++;
        }, speed) 

    return (
      <div className='progress-container w-full h-full rounded-full flex justify-center items-center'>
        <div className="w-3/4 h-3/4 rounded-full bg-slate-100 flex justify-center items-center">
            <h1 className='progress-value' >0 %</h1>
        </div>
      </div>
    ) 
  }
}


export default ProgressBar;