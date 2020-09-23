import actionDeleteBikePromise from './action-delete-bike-promise'
import actionGetAllBikesPromise from './action-get-all-bikes-promise'

export default function actionDeleteBike(id) {
    
    return async dispatch => {        
        await dispatch(actionDeleteBikePromise(id)) 
        await dispatch(actionGetAllBikesPromise())
    }
}