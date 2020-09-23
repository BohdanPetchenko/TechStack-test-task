import actionPromise from './action-promise'


export default function actionAvailableBikePromise(id, price) {

    let promise = fetch(`/api/available`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({id, price})
    })
        
        

    return actionPromise('availableBike', promise)
}

