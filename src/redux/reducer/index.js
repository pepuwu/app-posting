import { combineReducers } from "redux"
import TaskReducer from "./taskReducer"
import PostingReducer from './postingReducer';

export default combineReducers({
    taskReducer: TaskReducer,
    postingReducer: PostingReducer
})


