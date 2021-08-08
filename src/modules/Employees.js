import axios from 'axios'
import store from '../state/store/configureStore'

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
      return error
    }
  },
}

export default Employees