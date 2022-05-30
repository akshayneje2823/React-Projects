import React, { useState } from 'react';
import Fooddata from './FoodData';
import "./style.css";
import Form from 'react-bootstrap/Form';
import Cards from './Cards';

function Search() {
  const [fData, setfData] = useState(Fooddata);
  console.log(fData);

  // LOGO
  const zomatologo = "https://b.zmtcdn.com/web_assets/https://www.bing.com/th?id=OIP.LoFlqG1HYdUb8WtWK6hKNAHaEK&w=333&h=187&c=8&rs=1&qlt=90&https://www.bing.com/ck/a?!&&p=e09b0e2fc101d79c89c25179265819173303694d9c5c457877281d21069cfe03JmltdHM9MTY1Mzk0MTEzNyZpZ3VpZD01YjlkMWI0Zi04NzIxLTRhYTEtODRkNC1hYzBhZmViMjhjNWEmaW5zaWQ9NTQxMw&ptn=3&fclid=dec0d4ce-e053-11ec-9f8c-c6626d6b3fab&u=a1L2ltYWdlcy9zZWFyY2g_cT1ab21hdG8lMjBMb2dvJTIwRG93bmxvYWQmRk9STT1JUUZSQkEmaWQ9QkQ2MjIzMkRENUREMDY2RkYzRjEwNjE3MEVFMzM1MTA1QUI4QzEyOQ&ntb=1=6&dpr=1.25&pid=3.1&rm=2.png91604300478.png"
  return (
    <React.Fragment>
      <div className="container d-flex justify-content-between align-items-center">
        <img src={zomatologo} alt="img" style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} />
        <h2 style={{ color: "1b1464", cursor: "pointer", }} className="mt-3">Search Filter App</h2>
      </div>


      {/* Serach Bar  */}
      <Form className='d-flex justify-content-center align-items-center mt-3'>
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search Restaurant" />
        </Form.Group>
        <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
      </Form>

      <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:400}}>Restaurants in Ahmedabad open now</h2>
        <div className="row mt-2">
          <Cards/>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Search