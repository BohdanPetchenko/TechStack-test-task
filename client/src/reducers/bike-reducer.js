var reducer = function (state = new Map(), action) {

    if (action.type === 'GET_BIKES') {
        return state.set("bikes", action.state.bikes)
    }
    if (action.type === 'GET_COST') {
        
        return state.set("cost", action.state.cost)
    }
    else if (action.type === 'SET_STATE') {
        
        return state.set("bikes", action.state.bikes)
    }
    return state;
}
module.exports = reducer;