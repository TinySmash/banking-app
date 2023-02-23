import React, { Component } from 'react'

class ProgressBar extends Component {

  state = {
    progressClass: `progress-container${this?.props?.count}`,
    valueClass: `.progress-value${this?.props?.count}`,
    progressEndValue: this?.props?.percentage,
    count : this?.props?.count
  }


  render() { 

      const {progressEndValue, valueClass, progressClass, count} = this?.state ;
      let progressContainer = document.querySelector(`.progress-container${count}`);
      let valueContainer = document.querySelector(`.progress-value${count}`);
      const speed = 20;
      let progressValue = 0;
      function updateElements() {
        valueContainer = document.querySelector(valueClass);
        progressContainer = document.querySelector(progressClass);
      }

      const createProgress = setInterval(() => {
        updateElements();
        if (progressValue == progressEndValue || document.querySelector(`.progress-value${count}`) == undefined || document.querySelector(`.progress-container${count}`) == undefined) {
          clearInterval(createProgress);
        }
        document.querySelector(`.progress-value${count}`).innerText = `${progressValue} %`
        document.querySelector(`.progress-container${count}`).style.background = `conic-gradient(
          rgb(239 68 68) ${progressValue*3.6}deg,
          black 1deg,
          rgb(255, 177, 177)  1deg
          )`
          progressValue++;
        }, speed) 

    return (
      <div className={`progress-container${count} w-full h-full rounded-full flex justify-center items-center`}>
        <div className="w-3/4 h-3/4 rounded-full bg-slate-100 flex justify-center items-center">
            <h1 className={`progress-value${count}`} >0 %</h1>
        </div>
      </div>
    ) 
  }
}


export default ProgressBar;