import {GET_TASK_API} from "../constants/ToDoListConst"


const initialState = {
    taskList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TASK_API:
            return {...state, taskList: action.taskList}
        default:
            return state
    }
}
