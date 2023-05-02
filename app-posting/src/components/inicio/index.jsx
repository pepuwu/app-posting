import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <React.Fragment>
    <nav>
      <div>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>POSTING</a></li>
        </ul>
      </div>
    </nav>
    </React.Fragment>
  )
}

export const IndexBody = () => {
  return(
      <div>
        <button className='newTask'>
          New task
        </button>
        <div className='noTasks'>
          There are no registered tasks
        </div>
      </div>
    )
}
export default Navbar;
