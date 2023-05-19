import React, { useState } from 'react'
import { priorityList, statusList } from '../../const/constants';
import { FaRegEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeTask } from '../../redux/actions/taskActions';
import taskIcon from '../../resource/images/task-icon.png';
import sortIcon from '../../resource/images/sort-icon.png';

import './index.css'

const CardRegister = ({ setShowModal }) => {
    const [sortEnabled, setSortEnabled] = useState(false)
    const { taskList } = useSelector((state) => state.taskReducer)
    const dispatch = useDispatch()

    const getNameByArray = (value, array) => {
        const findNameOnArray = array.find((element) => (element.value === value))
        return findNameOnArray ? findNameOnArray.label : 'Not recognized'
    }

    const handleEditModal = (task) => {
        dispatch(onChangeTask(task))
        setShowModal(true)

    }

    const getPriorityClass = (priorityIndex) => {
        if (priorityIndex === 0) {
            return 'priority-task high-priority';
        } else if (priorityIndex === 1) {
            return 'priority-task medium-priority';
        } else if (priorityIndex === 2) {
            return 'priority-task low-priority';
        }
        return 'priority-task';
    }

    const handleSort = () => {
        setSortEnabled(!sortEnabled)
    }

    let sortedTaskList = sortEnabled ? [...taskList] : taskList.slice().sort((taskA, taskB) => {
        const priorityIndexA = priorityList.findIndex(item => item.value === taskA.priority);
        const priorityIndexB = priorityList.findIndex(item => item.value === taskB.priority);
        return priorityIndexA - priorityIndexB;

    })

    return (
        <React.Fragment>
            {taskList.length > 0 ? (
                <div>
                    <button onClick={handleSort} className={'sort-list-button'}> <img className='sort-list-img' src={sortIcon} /></button>
                    <section className='tasks-container'>
                        {sortedTaskList.map((task, index) => (
                            <article key={index} className='task-card'>
                                <div className='card-title'>
                                    <div>
                                        <img className='title-icon' src={taskIcon} />
                                        <h2>{task.name}</h2>
                                    </div>
                                    <button className='edit-task-button' onClick={() => handleEditModal(task)}><FaRegEdit /></button>
                                </div>
                                <p>{task.task}</p>
                                <div className='card-info-container'>
                                    <p className='card-email'>{task.email}</p>
                                    <p className={getPriorityClass(priorityList.findIndex(item => item.value === task.priority))}>
                                        {getNameByArray(task.priority, priorityList)}
                                    </p>
                                    <p className='card-status'>{getNameByArray(task.status, statusList)}</p>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            ) : (
                <div className='noTasks'>
                    There are no registered tasks
                </div>
            )}
        </React.Fragment>
    )
}

export default CardRegister