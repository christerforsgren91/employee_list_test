import store from '../state/store/configureStore'

const errorHandler = (error) => {
  if (error) {
    switch (error) {
      case 500:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: "Can't connect to server.",
        })
        break
      case 422:
        store.dispatch({
          type: 'ERORR_MESSAGE',
          payload: 'Sorry! Employee not found.',
        })
        break
      case 400:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: 'Bad request, check that the entered URL is correct',
        })
        break
      default:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: error.message,
        })
        break
    }
  } else {
    store.dispatch({
      type: 'ERROR_MESSAGE',
      payload: error.message,
    })
  }
}

export default errorHandler
