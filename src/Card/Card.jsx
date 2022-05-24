import React from 'react'
import img from '../Assets/Gaming.jpg'

function Card() {
    return (

        <div className="card text-center">
            <div className="overflow">
                <img src={img} alt="img" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit.
                    Mollitia consequatur corporis reiciendis
                    officiis tempore totam doloribus officia
                    deserunt iure minima.</p>
                    <a href="#" className='btn btn-outline-success'>Go Anuwhwre</a>
            </div>
        </div>

    )
}

export default Card
