import { combineRducers } from 'redux'
import userReducer from './user/user-reducer'
export default combineRducers({
    user: userReducer
})