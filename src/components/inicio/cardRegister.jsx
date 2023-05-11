import React, { useState } from 'react'
import { priorityList, statusInitializedList, statusList } from '../../const/constants';
import { FaRegEdit } from 'react-icons/fa';
import './index.css'

const CardRegister = ({ taskRegistered, setShowModal }) => {
    const [register, setRegister] = useState({
        id: 0,
        name: '',
        email: '',
        priority: '1',
        status: '1',
        task: '',
        isNew: true
    })


    const getNameByArray = (value, array) => {
        const findNameOnArray = array.find((element) => (element.value === value))
        return findNameOnArray ? findNameOnArray.label : 'Not recognized'
    }

    const handleEditModal = (task) => {
        setRegister(task)
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