import React, { useState } from 'react'
import { priorityList, statusInitializedList, statusList } from '../../const/constants';
import { FaRegEdit } from 'react-icons/fa';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { onChangeTask } from '../../redux/actions/taskActions';

const CardRegister = ({ taskRegistered, setShowModal }) => {

    const dispatch = useDispatch()

    const getNameByArray = (value, array) => {
        const findNameOnArray = array.find((element) => (element.value === value))
        return findNameOnArray ? findNameOnArray.label : 'Not recognized'
    }

    const handleEditModal = (task) => {
        dispatch(onChangeTask(task))
        setShowModal(true)

    }

    return (
        <React.Fragment>
            {taskRegistered.length > 0 ? (
                <section className='tasks-container'>
                    {taskRegistered.map((task, index) => (
                        <article key={index} className='task-card'>
                            <button onClick={() => handleEditModal(task)}><FaRegEdit /></button>
                            <h2>{task.name}</h2>
                            <p>{task.email}</p>
                            <span className='priority-task'>{getNameByArray(task.priority, priorityList)}</span>
                            <p>{getNameByArray(task.status, statusList)}</p>
                            <p>{task.task}</p>
                        </article>
                    ))}
                </section>
            ) : (
                <div className='noTasks'>
                    There are no registered tasks
                </div>
            )}
        </React.Fragment>
    )
}

export default CardRegister