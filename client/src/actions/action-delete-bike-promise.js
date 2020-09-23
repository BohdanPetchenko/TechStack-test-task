import actionPromise from './action-promise'


export default function actionDeleteBikePromise(id) {

    let promise = fetch(`/api/bikes/${id}`, {        
        method: "DELETE"
    }) 
    return actionPromise('deleteBike', promise)
}

