import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'

import actionCreateBike from '../actions/action-create-bike'

function FormBike({ onBike }) {

    const [nameBike, setNameBike] = useState('');
    const [typeBike, setTypeBike] = useState('');
    const [priceBike, setPriceBike] = useState('');
    
    return (
        <Container>
            <h1 className="mt-4">Awesome Bike Rental</h1>
            <h5 className="mt-4">&#129297; Create new rent</h5>
            <div className="formWrap">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formGroupBikeName">
                                <Form.Label>Bike name</Form.Label>
                                <Form.Control value={nameBike} onChange={e => setNameBike(e.target.value)} type="text" placeholder="Ex. Connondale S6" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridBikeType">
                                <Form.Label>Bike type</Form.Label>
                                <Form.Control as="select" value={typeBike} onChange={e => setTypeBike(e.target.value)}>
                                    <option>Custom</option>
                                    <option>Road riding</option>
                                    <option>Road & Gravel</option>
                                    <option>Pumptracks & Fun</option>
                                    <option>XC & Trail</option>
                                    <option>Dirt jump</option>
                                    <option>All mountain</option>
                                    <option>Downhill freeride & Enduro</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGroupRentPrise">
                                <Form.Label>Rent price</Form.Label>
                                <Form.Control type="number" step="0.01" min="0" value={priceBike} onChange={e => setPriceBike(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGroupButton">
                                <Button className="formButton" variant="success" onClick={e => {
                    onBike && typeof onBike === 'function' && onBike(nameBike, typeBike, priceBike)
                }}
                    disabled={!nameBike || !typeBike || !priceBike}>Submit rent</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}


const ConnectedCreateBikeForm = connect(null, { onBike: actionCreateBike })(FormBike);


const App = () =>
    <>
        <ConnectedCreateBikeForm />
    </>

export default App;

