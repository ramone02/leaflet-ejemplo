import React from 'react'

const SideBar = () => {
  return (
    <div className="d-flex" id="wrapper">
    {/* <!-- Sidebar--> */}
    <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Objetivos</div>
        <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Blips</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Plops</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Tracks</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
        </div>
    </div>
    </div>
  )
}

export default SideBar;