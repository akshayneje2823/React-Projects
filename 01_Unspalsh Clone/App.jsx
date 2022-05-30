import React,{ useState } from 'react';
import'./App.css';
// G9WSCOGF5N9b1SiJHTuMVgvyXVEM9EIvyAyQ0RrtzM8

function App() {
    const [value, setvalue] = useState('');
    const [result, setresult] = useState([])
    const fetchImages = () => {
        fetch(`"https://api.unsplash.com/search/photos?client_id=G9WSCOGF5N9b1SiJHTuMVgvyXVEM9EIvyAyQ0RrtzM8&query=${value}&orientation=squarish"`)
        .then((res)=>{return setresult(res.data) })        
    }
  return (
    <div className='App'>
      <div className="my-div">
          <span>Search</span>
          <input 
           style={{width:"60%"}}
           type="text" 
           value={value} 
           onChange={(e)=> setvalue(e.target.value)} 
           placeholder="Search"/>
          <button onClick={()=>fetchImages()} className="btn btn-success">Send</button>
      </div>
      <div className="gallery">
        {
          result.map((item)=>{
            return <img src={item.urls.regular} key={item.id} alt="img"/>
          })
        }
      </div>
    </div>
  )
}

export default App
