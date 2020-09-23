import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'

import actionDeleteBike from '../actions/action-delete-bike'
import actionRentBike from '../actions/action-rent-bike'
import actionGetCost from '../actions/action-get-cost'

function AvailableBikes(props) {

    let availableBikes = [];
    if (props.bikes) {
        availableBikes = props.bikes.filter(item => item.isRented == false)
    }

    function iterator() {
        let items = []
        for (let i = 1; i < 73; i++) {
            items.push(i)
        }
        return items

    }

    return (
        <Container className="mt-5">
            <h5>&#128692; Available bicycles{`(${availableBikes.length})`}</h5>

            {availableBikes.map(({ _id, name, type, price, rentCost }) => (
                <div className="bikesWrap " key={_id}>
                    <div className="d-flex">
                        {name} / {type} / ${rentCost ? rentCost : price}
                    </div>
                    <div>
                        <Form.Group className="d-flex mb-0" controlId="exampleForm.ControlSelect1">
                            <Form.Label>Rental time</Form.Label>
                            <Form.Control as="select" className="inputSelect" onChange={e => {
                                props.onTime && typeof props.onTime === 'function' && props.onTime(_id, e.target.value)
                            }}>
                                {iterator().map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div>
                        <Button className="mr-3" variant="primary" onClick={e => {
                            props.onRent && typeof props.onRent === 'function' && props.onRent(_id)
                        }}>Rent</Button>
                        <Button variant="danger" onClick={e => {
                            props.onDelete && typeof props.onDelete === 'function' && props.onDelete(_id)
                        }}>Delete</Button>
                    </div>
                </div>
            ))}

        </Container>
    );
}

function mapStateToProps(state) {

    return {
        bikes: state.bikeReducer.get("bikes"),
        cost: state.bikeReducer.get("cost")
    };
}


const ConnectedDeleteBikes = connect(mapStateToProps, { onDelete: actionDeleteBike, onRent: actionRentBike, onTime: actionGetCost })(AvailableBikes);


const App = () =>
    <>
        <ConnectedDeleteBikes />
    </>

export default App;

