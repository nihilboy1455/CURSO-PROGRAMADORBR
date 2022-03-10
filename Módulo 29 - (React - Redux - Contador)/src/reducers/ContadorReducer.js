function contador_reducer(state = 0, action){
    switch(action.type){
      case "INCREMENT":
        return state + 1
      case "DECREMENT":
        return state - 1
      default:
        return state
    }
}

export default contador_reducer