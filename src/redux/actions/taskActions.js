import { TYPE_TASK } from "../../const/constants"

export const onChangeTask = (value) => (dispatch) => {
    dispatch({ type: TYPE_TASK.REGISTER_TASK, payload: value })
}  
