import React, { Component, useEffect } from 'react'

class ProgressBar extends Component {

  state = {
    progressClass: `progress-container${this?.props?.count}`,
    valueClass: `.progress-value${this?.props?.count}`,
    progressEndValue: this?.props?.percentage,
    count : this?.props?.count,
    sign: ""
  }

  componentDidMount() {
    if (this?.props?.sign != undefined){
      this.setState({
        sign : this?.props?.sign
      })
    } else {
      this.setState({
        sign : ""
      })
    }
  }


  render() { 
      

      const {progressEndValue, valueClass, progressClass, count, sign} = this?.state ;
      let progressContainer = document.querySelector(`.progress-container${count}`);
      let valueContainer = document.querySelector(`.progress-value${count}`);
      const speed = 16;
      let progressValue = 0;
      function updateElements() {
        valueContainer = document.querySelector(valueClass);
        progressContainer = document.querySelector(progressClass);
      }

      const createProgress = setInterval(() => {
        if (progressValue == progressEndValue || document.querySelector(`.progress-value${count}`) == undefined || document.querySelector(`.progress-container${count}`) == undefined) {
          clearInterval(createProgress);
        }
        updateElements();
        document.querySelector(`.progress-value${count}`).innerText = `${sign}${progressValue} %`
        document.querySelector(`.progress-container${count}`).style.background = `conic-gradient(
          rgb(239 68 68) ${progressValue*3.6}deg,
          black 1deg,
          rgb(255, 177, 177)  1deg
          )`
          if((progressEndValue - progressValue) >= 1) {
            progressValue++;
          }
          else if ((progressEndValue - progressValue) >= 0.1) {
            progressValue = progressValue + 0.1;
            progressValue = Number(progressValue.toFixed(1));
          }
          else if ((progressEndValue - progressValue) < 0.1) {
            progressValue = progressValue + 0.01;
            progressValue = Number(progressValue.toFixed(2));
          } 
        }, speed) 

    return (
      <div className={`progress-container${count} w-full h-full rounded-full flex justify-center items-center insetShadow2`}>
        <div className=" insetShadow  w-[70%] h-[70%] rounded-full bg-slate-100 flex justify-center items-center">
            <h1 className={`progress-value${count} font-semibold md:font-bold text-lg md:text-xl`} >0 %</h1>
        </div>
      </div>
    ) 
  }
}


export default ProgressBar;