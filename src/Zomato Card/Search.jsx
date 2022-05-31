import React, { useState, useEffect } from 'react';
import Fooddata from './FoodData';
import "./style.css";
import Form from 'react-bootstrap/Form';
import Cards from './Cards';

function Search() {
  const [fData, setfData] = useState(Fooddata);
  console.log(fData);


  const [CopyData, setCopyData] = useState([])
  console.log(CopyData)
  // @material-ui/icons

  //  Search Filter 
  const changeData = (e) => {
    let getChangedata = e.toLowerCase();
    if (getChangedata == "") {
      setCopyData(fData)
    } else {
      let storeData = CopyData.filter((ele,k)=>{
        return ele.rname.toLowerCase().match(getChangedata)
      });
       setCopyData(storeData)
    }
  }


  // LOGO
  const zomatologo = "";



  //  UseEffect
  useEffect(() => {
    setCopyData(Fooddata)

  }, [])



  return (
    <React.Fragment>
      {/* Logo  */}
      <div className="container d-flex justify-content-between align-items-center">
        <img src={zomatologo} alt="img" style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} />
        <h2 style={{ color: "1b1464", cursor: "pointer", }} className="mt-3">Search Filter App</h2>
      </div>


      {/* Serach Bar  */}
      <Form className='d-flex justify-content-center align-items-center mt-3'>
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control type="text"
            placeholder="Search Restaurant"
            onChange={(e) => changeData(e.target.value)}
          />
        </Form.Group>

        <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
      </Form>

      <section className='item_section mt-4 container '>
        <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahmedabad open now</h2>
        <div className="row mt-2 d-flex justify-content-center  align-items-center">
          {CopyData && CopyData.length ? <Cards data={CopyData} /> : "Please wait..."}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Search