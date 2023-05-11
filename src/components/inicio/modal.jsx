import React, { useState } from 'react'
import { SelectFromList } from '../inputs/selectFromList';
import { priorityList, statusInitializedList, statusList } from '../../const/constants';
import { TextInputs } from '../inputs/textInputs';
import { ModalButtons } from '../inputs/buttons';
import './index.css'


const TaskModal = ({ saveRegister, taskRegistered, showModal, setShowModal }) => {
    const [register, setRegister] = useState({
        id: 0,
        name: '',
        email: '',
        priority: '1',
        status: '1',
        task: '',
        isNew: true
    })
    const [editTask, setEditTask] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegister({ ...register, [name]: value })
    }


    const handleCloseModal = () => {
        setShowModal(false)
        setEditTask({})
    }

    const handleSave = () => {

        if (register.name !== '' && register.email !== '') {
            const existingTask = taskRegistered.find((task) => task.id === register.id)
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
                priority: '1',
                status: '1',
                task: '',
                isNew: true
            })
        }
    }

    return (
        <React.Fragment>
            {showModal && (
                <div className='modal-overlay'>
                    <div className='modal'>
                        <h1 id='modalH1'>Registro</h1>

                        <TextInputs handleChange={handleChange} label={'Name:'} id={'name'} name={'name'} value={register.name} />
                        <TextInputs handleChange={handleChange} label={'Email:'} id={'email'} name={'email'} value={register.email} />

                        <SelectFromList handleChange={handleChange}
                            selectList={priorityList} label={'Priority'}
                            id={'priority'} name={'priority'} isNew={false} value={register.priority} />

                        <SelectFromList handleChange={handleChange}
                            selectList={register.isNew ? statusInitializedList : statusList}
                            label={'Status'} id={'status'} name={'status'} isNew={register.isNew} value={register.status} />

                        <label id='task'>Assigned task:</label>
                        <textarea id='task' name='task' rows='4' value={register.task} onChange={handleChange}></textarea>

                        <div className='modal-buttons'>
                            <ModalButtons id='saveButton' onClick={handleSave} label={'Guardar'} />
                            <ModalButtons id='cancelButton' onClick={handleCloseModal} label={'Cancel'} />
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default TaskModal