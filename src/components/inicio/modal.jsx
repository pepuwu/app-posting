import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SelectFromList } from '../inputs/selectFromList';
import { priorityList, statusInitializedList, statusList } from '../../const/constants';
import { TextInputs } from '../inputs/textInputs';
import { ModalButtons } from '../inputs/buttons';
import './index.css'
import { onChangeTask } from '../../redux/actions/taskActions';


const TaskModal = ({ saveRegister, taskRegistered, showModal, setShowModal }) => {

    const dispatch = useDispatch()
    const { task } = useSelector(state => state.taskReducer);
    const [editTask, setEditTask] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        const previewTask = { ...task, [name]: value }
        dispatch(onChangeTask(previewTask))
    }


    const handleCloseModal = () => {
        setShowModal(false)
        setEditTask({})
    }

    const handleSave = () => {

        if (task.name !== '' && task.email !== '') {
            const existingTask = taskRegistered.find((taskItem) => taskItem.id === task.id)
            if (!task.isNew) {
                const updatedTasks = taskRegistered.map((taskItem) => (taskItem.id === existingTask.id ? task : taskItem));
                saveRegister(updatedTasks);
            } else {
                const registerWithID = { ...task, id: task.id += 1, isNew: false };
                saveRegister([...taskRegistered, registerWithID])

            }
            setShowModal(false)
            dispatch(onChangeTask({
                ...task,
                name: '',
                email: '',
                priority: '1',
                status: '1',
                task: '',
                isNew: true
            }))

        }
    }

    return (
        <React.Fragment>
            {showModal && (
                <div className='modal-overlay'>
                    <div className='modal'>
                        <h1 id='modalH1'>Registro</h1>

                        <TextInputs handleChange={handleChange} label={'Name:'} id={'name'} name={'name'} value={task.name} />
                        <TextInputs handleChange={handleChange} label={'Email:'} id={'email'} name={'email'} value={task.email} />

                        <SelectFromList handleChange={handleChange}
                            selectList={priorityList} label={'Priority'}
                            id={'priority'} name={'priority'} isNew={false} value={task.priority} />

                        <SelectFromList handleChange={handleChange}
                            selectList={task.isNew ? statusInitializedList : statusList}
                            label={'Status'} id={'status'} name={'status'} isNew={task.isNew} value={task.status} />

                        <label id='task'>Assigned task:</label>
                        <textarea id='task' name='task' rows='4' value={task.task} onChange={handleChange}></textarea>

                        <div className='modal-buttons'>
                            <ModalButtons className='saveButton' onClick={handleSave} label={'Guardar'} />
                            <ModalButtons className='cancelButton' onClick={handleCloseModal} label={'Cancel'} />
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default TaskModal