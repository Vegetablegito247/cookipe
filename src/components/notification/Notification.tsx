import React from 'react'
import { NavLink } from 'react-router-dom'

function Notification() {
  return (
    <div className="notification">
        <div className="notification_head">
            <div className="close">
                <i></i>
                <h3>Notifications</h3>
            </div>
            <div className="notification_mark">
                <span>Mark all as read</span>
            </div>
        </div>
        <div className="notification_nav">
            <NavLink to=''>
                <span>All</span>
            </NavLink>
            <NavLink to=''>
                <span>Read</span>
            </NavLink>
            <NavLink to=''>
                <span>Unread</span>
            </NavLink>
        </div>
        <div className="notification_body">
            <NavLink to=''>
                <div className="notification_blog"></div>
                <div className="notification_post"></div>
            </NavLink>
        </div>
    </div>
  )
}

export default Notification