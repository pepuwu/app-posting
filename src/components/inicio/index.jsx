import React, { useState } from 'react'
import './index.css'
import TaskModal from './modal';
import CardRegister from './cardRegister';
import NavBarButton from './navBarButton';


const Body = ({ saveRegister, taskRegistered }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <React.Fragment>
      <NavBarButton setShowModal={setShowModal} />
      <TaskModal saveRegister={saveRegister} taskRegistered={taskRegistered} showModal={showModal} setShowModal={setShowModal} />
      <CardRegister setShowModal={setShowModal} />
    </React.Fragment>
  )
}

export default Body