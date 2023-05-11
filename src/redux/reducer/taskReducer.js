import { TYPE_TASK } from "../../const/constants"

const INITIAL_STATE = {
    task: {
        id: 0,
        name: '',
        email: '',
        priority: '1',
        status: '1',
        task: '',
        isNew: true
    },
    taskList: []
}

const TaskReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case TYPE_TASK.REGISTER_TASK:
            return {
                ...state,
                task: action.payload
            }

        default: return state
    }
}


export default TaskReducer