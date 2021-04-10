const initialState = {
  tasks: ['I am a task'],
  items: []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      }

    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat(action.item)
      }

    default:
      return state
  }
}

export default appReducer