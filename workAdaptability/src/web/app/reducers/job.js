import * as types from '../actions/types'
import { combineReducers } from 'redux'
const initialState = {
  loading: true,
  error: '',
  payload: {}
}

const job = combineReducers({
  fetch: (state = initialState, action) => {
    switch(action.type){
      case types.JOBS_REQUEST:
        return {
          ...state
        }
      case types.JOBS_SUCCESS:
        return {
          ...state,
          loading: false,
          payload: action.payload
        }
      case types.JOBS_FAILURE:
        return {
          ...state,
          error: action.payload.err
        }
      default:
        return state
    }
  }
})
export default job
