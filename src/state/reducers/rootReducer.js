const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      return {
        ...state,
        employees: action.payload,
      }
    case 'ERROR_MESSAGE':
      return {
        ...state,
        error: true,
        message: 'No employees was recived',
      }
      case 'ERROR_RESET':
        return {
          ...state,
          error: false,
          open: false,
        }
    default:
      return state
  }
}

export default rootReducer