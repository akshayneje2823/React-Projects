import React from 'react';
import Card from 'react-bootstrap/Card'

function Cards() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <div className="card_body">
                <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className='mt-2'>Masala Theoryy</h4>
                    <span>3.8&nbsp;★</span>
                </div>

                <div className="lower_data d-flex justify-content-between">
                    <h5>North Indian,Birayani,Mughalai</h5>
                    <span>350 for one</span>
                </div>
            </div>
        </Card>
    )
}

export default Cards