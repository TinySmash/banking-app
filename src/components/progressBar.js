import React, { Component } from 'react'

class ProgressBar extends Component {


  render() { 

      const progressContainer = document.querySelector('.progress-container');
      const valueContainer = document.querySelector('.progress-value');
      const speed = 400;
      let progressValue = 0;
      let progressEndValue = 70;
      const createProgress = setInterval(() => {
          progressValue++;
        valueContainer?.innerText = `${progressValue} %`
        progressContainer?.style?.background = `conic-gradient(
            rgb(239 68 68) ${progressValue * 3.6}deg,
            black 1deg,
            rgb(241 245 249) 1deg,
        )`
        if (progressValue == progressEndValue) {
            clearInterval(createProgress);
        }
    }) 

    return (
      <div className='progress progress-container w-full h-full rounded-full flex justify-center items-center'>
        <div className="progress progress-value w-3/4 h-3/4 rounded-full bg-slate-100 flex justify-center items-center">
            <h1>0 %</h1>
        </div>
      </div>
    ) 
  }
}


export default ProgressBar;