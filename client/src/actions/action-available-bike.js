import actionAvailableBikePromise from './action-available-bike-promise'
import actionGetAllBikesPromise from './action-get-all-bikes-promise'

export default function actionAvailableBike(id, price) {
    
    return async dispatch => {        
        await dispatch(actionAvailableBikePromise(id, price))
        await dispatch(actionGetAllBikesPromise())  
    }
}