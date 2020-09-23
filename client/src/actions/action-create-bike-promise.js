import actionPromise from './action-promise'


export default function actionCreateBikePromise(nameBike, typeBike, priceBike) {

    let promise = fetch("/api/new-bike", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ nameBike, typeBike, priceBike })
    })
        .then(res => res.json())
    
    return actionPromise('createBike', promise)
}

