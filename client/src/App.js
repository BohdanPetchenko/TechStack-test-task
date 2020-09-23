import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from "./store/index";
import FormBike from './Components/FormBike';
import AvailableBikes from './Components/AvailableBikes';
import RentBikes from './Components/RentBikes';


function App() {
  return (
    <Provider store={store}>
      <FormBike />
      <RentBikes />
      <AvailableBikes />
      
    </Provider>
  );
}

export default App;
