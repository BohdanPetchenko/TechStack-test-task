import actionGetAllBikesPromise from './action-get-all-bikes-promise'

export default function actionGetCost(id, time) {
  debugger
  return dispatch => {
    fetch(`/api/bikes/${id}/${time}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => dispatch({ type: 'GET_COST', state: { cost: data } }))
      .then(data => dispatch(actionGetAllBikesPromise()))
  }
}

