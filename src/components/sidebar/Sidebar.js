import React from 'react'
import SidebarOption from '../sidebaroptions/SidebarOption'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="" 
            />
            <SidebarOption />
        </div>
    )
}

export default Sidebar
