import React, { useState,useEffect } from 'react'

function Timer() {
    const [Time, setTime] = useState({time: new Date().toLocaleTimeString()});
    useEffect(()=>{
        setInterval(()=>{
            setTime({time: new Date().toLocaleTimeString()})
        })
    },[])
  return (
    <div className="container">
        <div className="col md-6">
            <div className="row">
                <div className="card">
                    <div className="card-head">
                        {Time}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timer