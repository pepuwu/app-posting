import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import './index.css'


const Body = () => {

  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [registro, SetRegistroData] = useState({
    name: '',
    email: '',
    priority: '',
    status: 'no iniciado',
    task: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    SetRegistroData({ ...registro, [name]: value })
  }


  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSave = () => {
    if (registro.name !== '' && registro.email !== '') {
      setShowModal(false)
      dispatch(addUser)
      SetRegistroData({ name: '', email: '', priority: '', status: 'no iniciado', task: '', })
    }
  }

  return (
    <React.Fragment>
      <button className='newTask' onClick={handleShowModal}>
        New task
      </button>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h1 id='modalH1'>Registro</h1>
            <label id='name'>Name:</label>
            <input type='text' id='name' name='name'
              value={registro.name} onChange={handleChange} />

            <label id='email'>Email:</label>
            <input type='email' id='email' name='email' value={registro.email} onChange={handleChange} />

            <label id='priority'>Priority:</label>
            <select id='priority' name='priority'>
              <option value={registro.priority = 'alto'} onChange={handleChange}>Alto</option>
              <option value={registro.priority = 'medio'} onChange={handleChange}>Medio</option>
              <option value={registro.priority = 'bajo'} onChange={handleChange}>Bajo</option>
            </select>

            <label id='status'>Status:</label>
            <select id='status' name='status'>
              <option value='alto' onChange={handleChange}>No iniciado</option>
              <option value='medio' onChange={handleChange}>Iniciado</option>
            </select>

            <label id='task'>Assigned task:</label>
            <textarea id='task' name='task' rows='4' value={registro.task} onChange={handleChange}></textarea>

            <div className='modal-buttons'>
              <button id='saveButton' onClick={handleSave}>Guardar</button>
              <button id='cancelButton' onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {registro.name != 0 ? (
        <div className='tasks'>
          <div>
            {registro.name}
          </div>
          <div>
            {registro.email}
          </div>
          <div>
            {registro.priority}
          </div>
          <div>
            {registro.task}
          </div>
        </div>

      ) : (
        <div className='noTasks'>
          There are no registered tasks
        </div>
      )}
    </React.Fragment>
  )
}

export default Body