import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import actionAvailableBike from '../actions/action-available-bike'


function RentBikes(props) {
    
    let rentBikes = [];
    if (props.bikes) {
        
        rentBikes =props.bikes.filter(item => item.isRented == true)
    }
    
    function calculateAllCost(rentBikes){
        let cost = 0
        for(let i of rentBikes){
            cost += i.rentCost
        }
        return cost
    }

    return (
        <Container className="mt-5">
            <h5>&#129321; Your rent(Total: ${`${calculateAllCost(rentBikes)}`})</h5>

            {rentBikes.map(({ _id, name, type, price, rentCost }, index) => (
                <div className="bikesWrap" key={index}>
                    <div>{name} / {type} / ${rentCost}</div>
                    <div>
                        <Button variant="primary" onClick={e => {
                            props.onCancel && typeof props.onCancel === 'function' && props.onCancel(_id, price)
                        }}>Cancel Rent</Button>                        
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


const ConnectedDeleteBikes = connect(mapStateToProps, { onCancel: actionAvailableBike })(RentBikes);


const App = () =>
    <>
        <ConnectedDeleteBikes />
    </>

export default App;

