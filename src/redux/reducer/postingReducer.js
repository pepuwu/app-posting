import { TYPE_POST } from "../../const/constants";

const INITIAL_STATE = {
    userList: [],
    postList: [],
    postByUserList: []
}



const PostingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPE_POST.GET_USER:
            return {
                ...state,
                userList: action.payload
            }
        case TYPE_POST.GET_POST:
            return {
                ...state,
                postList: action.payload
            }
        case TYPE_POST.GET_POSTBYUSER:
            return {
                ...state,
                postByUserList: action.payload
            }
        default:
            return state;
    }
};

export default PostingReducer