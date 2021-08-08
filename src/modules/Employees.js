import axios from 'axios'
import store from '../state/store/configureStore'
import errorHandler from './ErrorHandler'

const Employees = {
  async index() {
    try {
      const response = await axios.get(
        'https://reqres.in/api/users?per_page=12'
      )
      store.dispatch({
        type: 'SET_EMPLOYEE',
        payload: response.data.data,
      })
    } catch (error) {
      errorHandler(error)
    }
  },
}

export default Employees
