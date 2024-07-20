import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashHead from '../../components/dashHead/DashHead';

function Settings() {
  return (
    <div className="settings_dash">
        <div className="settings_nav">
            <div className="settings_nav_head">
                <h3>Settings</h3>
            </div>
            <div className="settings_nav_list">
                <NavLink to=''>Personal Information</NavLink>
                <NavLink to=''>Change password</NavLink>
                <NavLink to=''>Delete account</NavLink>
            </div>
        </div>
        <div className="settings_main">
            <DashHead title='Settings' />
            <div className="settings_content">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Settings