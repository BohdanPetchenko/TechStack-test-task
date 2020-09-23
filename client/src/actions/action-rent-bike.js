import actionRentBikePromise from './action-rent-bike-promise'
import actionGetAllBikesPromise from './action-get-all-bikes-promise'

export default function actionRentBike(id) {
    
    return async dispatch => {        
        await dispatch(actionRentBikePromise(id))
        await dispatch(actionGetAllBikesPromise())  
    }
}