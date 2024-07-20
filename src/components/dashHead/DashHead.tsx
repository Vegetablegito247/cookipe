import React from 'react'

interface Props {
    title: string
}

function DashHead({ title }: Props) {
  return (
    <div>
        <div className="dash_title">
            <h3>{title}</h3>
        </div>
        <div className="dash_info">
            <div className="dash_search">
                <form action="">
                    <input type="search" name="" id="" />
                </form>
            </div>
            <div className="dash_user_notify">
                <div className="dash_notification"></div>
                <div className="dash_user">
                    <div className="dash_user_img">
                        <img src="" alt="" />
                    </div>
                    <div className="dash_user_title">
                        <h3></h3>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashHead