import React, { useState } from 'react'
import './index.css'


const Body = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <input type='text' id='name' name='name' />

            <label id='email'>Email:</label>
            <input type='email' id='email' name='email' />

            <label id='priority'>Priority:</label>
            <select id='priority' name='priority'>
              <option value='alto'>Alto</option>
              <option value='medio'>Medio</option>
              <option value='bajo'>Bajo</option>
            </select>

            <label id='status'>Status:</label>
            <select id='status' name='status'>
              <option value='alto'>No iniciado</option>
              <option value='medio'>Iniciado</option>
            </select>

            <label id='task'>Assigned task:</label>
            <textarea id='task' name='task' rows='4'></textarea>

            <div className='modal-buttons'>
              <button id='saveButton'>Guardar</button>
              <button id='cancelButton' onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className='noTasks'>
        There are no registered tasks
      </div>
    </React.Fragment>
  );
};

export default Body