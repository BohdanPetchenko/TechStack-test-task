import actionPromise from './action-promise'

export default function actionGetAllBikesPromise() {

  return dispatch => {
    fetch('/api/all-bikes', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => dispatch({ type: 'GET_BIKES', state: { bikes: data } }))
  }
}

