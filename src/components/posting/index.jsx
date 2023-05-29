import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosting } from '../../redux/actions/postingActions'
import '../inicio/index.css'

const PostingBody = () => {
    const dispatch = useDispatch();
    const { postByUserList } = useSelector((state) => state.postingReducer)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)
    const totalPages = Math.ceil(postByUserList.length / postsPerPage)
    const [displayedPages, setDisplayedPages] = useState(
        Array(totalPages > 3 ? 3 : totalPages)
            .fill()
            .map((_, index) => index + 1)
    );

    useEffect(() => {
        dispatch(getPosting())
    }, [dispatch])

    useEffect(() => {
        const startIndex = Math.max(currentPage - 1, 0)
        const endIndex = Math.min(startIndex + 2, totalPages - 1)
        setDisplayedPages(
            Array(endIndex - startIndex + 1)
                .fill()
                .map((_, index) => startIndex + index + 1)
        );
    }, [currentPage, totalPages]);

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = postByUserList.slice(indexOfFirstPost, indexOfLastPost)

    const prevHandler = () => {
        if (currentPage - 3 >= 1) {
            setCurrentPage((prevPage) => prevPage - 3);
        } else {
            setCurrentPage(1)
        }
    }


    const nextHandler = () => {
        if (currentPage + 3 <= totalPages) {
            setCurrentPage((prevPage) => prevPage + 3);
        } else {
            setCurrentPage(totalPages)
        }
    }

    return (
        <React.Fragment>
            <div className="card-container-posting">
                {currentPosts.map((post) => (
                    <div key={post.id} className="card-posting">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <p>{post.user.username}</p>
                        <p>{post.user.email}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {currentPage > 1 && (
                    <button onClick={prevHandler} className="pagination-btn">
                        &lt;
                    </button>
                )}
                {displayedPages.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''
                            }`}
                    >
                        {pageNumber}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button onClick={nextHandler} className="pagination-btn">
                        &gt;
                    </button>
                )}
            </div>
        </React.Fragment>
    )
}

export default PostingBody;
