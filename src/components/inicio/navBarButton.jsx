import React from 'react'
import './index.css'


const NavBarButton = ({ setShowModal }) => {
    const handleShowModal = () => {
        setShowModal(true)
    }


    return (
        <React.Fragment>
            <button className='newTask' onClick={handleShowModal}>
                New task
            </button>
        </React.Fragment>
    )
}

export default NavBarButton