
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from '../reducers/index'

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))


fetch('/api/all-bikes', {
    method: 'GET'
}).then(res => res.json())
    .then(data => {
        store.dispatch({
            type: "SET_STATE",
            state: {
                bikes: data
            }
        });
    })


export default store