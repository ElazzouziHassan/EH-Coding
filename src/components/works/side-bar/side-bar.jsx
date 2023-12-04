import React from 'react'
import './side-bar.scss'

function Sidebar() {
  return (
    <div className="side-bar">
      <button>All Projects</button>
      <button>UI/ UX Design</button>
      <button>Frontend</button>
      <button>Backend</button>
      <button>APIs</button>
      <button>Others</button>
    </div>
  )
}

export default Sidebar