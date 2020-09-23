import actionCreateBikePromise from './action-create-bike-promise'
import actionGetAllBikesPromise from './action-get-all-bikes-promise'


export default function actionCreateBike(nameBike, typeBike, priceBike) {    
    return async dispatch => {   
        
        await dispatch(actionCreateBikePromise(nameBike, typeBike, priceBike))
        await dispatch(actionGetAllBikesPromise())
        
    }
}