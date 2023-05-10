import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import { SelectFromList } from '../inputs/selectFromList';
import { priorityList, statusInitializedList, statusList } from '../../const/constants';
import { TextInputs } from '../inputs/textInputs';
import { ModalButtons } from '../inputs/buttons';
import { FaRegEdit } from 'react-icons/fa';
import './index.css'


const Body = ({ saveRegister, taskRegistered }) => {
  const [showModal, setShowModal] = useState(false)
  const [register, setRegister] = useState({
    id: 0,
    name: '',
    email: '',
    priority: '',
    status: 'no iniciado',
    task: '',
    isNew: true
  })
  const [editTask, setEditTask] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }


  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditTask({})
  }

  const handleEditModal = (task) => {
    setRegister(task)
    setShowModal(true)

  }

  const handleSave = () => {

    if (register.name !== '' && register.email !== '') {
      const existingTask = taskRegistered.find((task) => task.id === register.id);
      if (!register.isNew) {
        const updatedTasks = taskRegistered.map((task) => (task.id === existingTask.id ? register : task));
        saveRegister(updatedTasks);
      } else {
        const registerWithID = { ...register, id: register.id += 1, isNew: false };
        saveRegister([...taskRegistered, registerWithID])

      }
      setShowModal(false)

      setRegister({
        ...register,
        name: '',
        email: '',
        priority: '',
        status: 'no iniciado',
        task: '',
        isNew: true
      })
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

            <TextInputs handleChange={handleChange} label={'Name:'} id={'name'} name={'name'} value={register.name} />
            <TextInputs handleChange={handleChange} label={'Email:'} id={'email'} name={'email'} value={register.email} />
            <SelectFromList handleChange={handleChange} selectList={priorityList} label={'Priority'} id={'priority'} name={'priority'} isNew={false} />
            <SelectFromList handleChange={handleChange} selectList={register.isNew ? statusInitializedList : statusList} label={'Status'} id={'status'} name={'status'} isNew={register.isNew} />

            <label id='task'>Assigned task:</label>
            <textarea id='task' name='task' rows='4' value={register.task} onChange={handleChange}></textarea>

            <div className='modal-buttons'>
              <ModalButtons id='saveButton' onClick={handleSave} label={'Guardar'} />
              <ModalButtons id='cancelButton' onClick={handleCloseModal} label={'Cancel'} />
            </div>
          </div>
        </div>
      )}

      {taskRegistered.length > 0 ? (
        <div className='tasks-container'>
          {taskRegistered.map((task, index) => (
            <div key={index} className='task-card'>
              <button onClick={() => handleEditModal(task)}><FaRegEdit /></button>
              <div>{task.name}</div>
              <div>{task.email}</div>
              <div>{task.priority}</div>
              <div>{task.status}</div>
              <div>{task.task}</div>
            </div>
          ))}
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