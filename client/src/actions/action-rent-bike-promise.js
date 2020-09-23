import actionPromise from './action-promise'


export default function actionRentBikePromise(id) {

    let promise = fetch(`/api/rent`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({id})
    })
        
        

    return actionPromise('rentBike', promise)
}

