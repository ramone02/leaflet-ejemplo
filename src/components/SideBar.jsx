import React from 'react'

const SideBar = ({setSelected,selected}) => {
  return (
    <div className="d-flex" id="wrapper">
    {/* <!-- Sidebar--> */}
    <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Objetivos</div>
        {
          selected === 'Events'?
          <div className="list-group list-group-flush">
              <button className="list-group-item list-group-item-action list-group-item-light p-3 fw-bolder broder-bottom" onClick={()=>setSelected(undefined)}>Close</button>
              <div>
                {/* listado de eventos */}
              </div>
          </div>:
          <div className="list-group list-group-flush">
          <button className="list-group-item list-group-item-action list-group-item-light p-3" onClick={()=>setSelected('Blips')}>Blips</button>
          <button className="list-group-item list-group-item-action list-group-item-light p-3" onClick={()=>setSelected('Plops')}>Plops</button>
          <button className="list-group-item list-group-item-action list-group-item-light p-3" onClick={()=>setSelected('Tracks')}>Tracks</button>
          <button className="list-group-item list-group-item-action list-group-item-light p-3" onClick={()=>setSelected('Events')}>Events</button>
          <button className="list-group-item list-group-item-action list-group-item-light p-3" onClick={()=>setSelected('Profile')}>Profile</button>
          </div>
          
        }
    </div>
    </div>
  )
}

export default SideBar;