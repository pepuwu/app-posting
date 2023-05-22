import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosting } from '../../redux/actions/postingActions'
import '../inicio/index.css'


const PostingBody = () => {
    const dispatch = useDispatch()
    const { postByUserList } = useSelector((state) => state.postingReducer)

    useEffect(() => {
        dispatch(getPosting())
    }, [dispatch])


    return (
        <React.Fragment>
            {postByUserList.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>{post.user.username}</p>
                        <p>{post.user.email}</p>
                    </div>
                );
            })}
        </React.Fragment>
    )
}

export default PostingBody