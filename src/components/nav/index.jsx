import React from "react"
import Body from '../inicio'
import PostingBody from '../posting'
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import './index.css'


const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <div>
          <ul>
            <li><Link to="/inicio">HOME</Link></li>
            <li><Link to="/posting">POSTING</Link></li>
          </ul>
        </div>
      </nav>

    </React.Fragment>

  )
}

export default Navbar