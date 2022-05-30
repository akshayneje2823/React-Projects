import React, { useState } from 'react'

function Time2() {
    let time = new Date().toLocaleTimeString();

    const [currentTime,setCurrentTime] = useState(time);

    let updateTime = ()=>{
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }

    setInterval(updateTime,1000)
  return (
    <div className="container">
      <div className="col-md-6">
        <div className="row">
          <div className="card">
          <h1>{currentTime}</h1>
          </div>
          </div>
        </div>
      </div>
  
  )
}

export default Time2