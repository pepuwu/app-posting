import { TYPE_POST, apiUrl } from "../../const/constants";

export const getPosting = () => async (dispatch) => {
    try {

        const responseUsers = await fetch(`${apiUrl}users`);
        const responsePost = await fetch(`${apiUrl}posts`)
        const dataUsers = await responseUsers.json();
        const dataPost = await responsePost.json();

        const getPostUser = dataPost.map((post) => {
            const user = dataUsers.find((user) => user.id === post.userId)
            return {
                ...post,
                user
            }
        })


        dispatch({ type: TYPE_POST.GET_USER, payload: dataUsers });
        dispatch({ type: TYPE_POST.GET_POST, payload: dataPost });
        dispatch({ type: TYPE_POST.GET_POSTBYUSER, payload: getPostUser });
    } catch (error) {
        console.log(error)
    }
}
