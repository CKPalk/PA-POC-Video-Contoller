import * as ActionTypes from '../constants/ActionTypes'

const initialState = []

const actionsMap = {
  // [ActionTypes.ACTION_NAME]: (state, action) => updated state,
  // or
  // [ActionTypes.ACTION_NAME](state, action) { return updated state }
  [ActionTypes.AD.SET_THUMBNAIL](state, action) {
    return [{
      imageData: action.imageData
    }, ...state]
  },

  [ActionTypes.ADD_TODO](state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state]
  },
  [ActionTypes.DELETE_TODO](state, action) {
    return state.filter(todo =>
      todo.id !== action.id
    )
  },
  [ActionTypes.EDIT_TODO](state, action) {
    return state.map(todo =>
      (todo.id === action.id ?
        Object.assign({}, todo, { text: action.text }) :
        todo)
    )
  },
  [ActionTypes.COMPLETE_TODO](state, action) {
    return state.map(todo =>
      (todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) :
        todo)
    )
  },
  [ActionTypes.COMPLETE_ALL](state/*, action*/) {
    const areAllCompleted = state.every(todo => todo.completed)
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllCompleted
    }))
  },
  [ActionTypes.CLEAR_COMPLETED](state/*, action*/) {
    return state.filter(todo => todo.completed === false)
  }
}

export default (state = initialState, action) => {
  console.log(action)
  const reduceFn = actionsMap[action.type]
  console.log(reduceFn)
  if (!reduceFn) return state
  return reduceFn(state, action)
}
