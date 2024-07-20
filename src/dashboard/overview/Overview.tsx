import React from 'react'
import DashHead from '../../components/dashHead/DashHead'

function Overview() {
  return (
    <div className="overview">
        <DashHead title='Overview' />
        <div className="overview_content">
            <div className="overview_head">
                <div className="calendar">
                    <div className="set_calendar"></div>
                    <div className="refresh"></div>
                </div>
                <div className="create_post"></div>
            </div>
            <div className="overview_insights">
                <div className="insights">
                    <div className="insights_date">
                        <h3></h3>
                        <span></span>
                    </div>
                    <div className="insight_chart">

                    </div>
                    <div className="insight_percentage">
                        <div className="month"></div>
                        <div className="interacted"></div>
                    </div>
                </div>
                <div className="insights">
                    <div className="insights_date">
                        <h3></h3>
                        <span></span>
                    </div>
                    <div className="insight_chart">

                    </div>
                    <div className="insight_percentage">
                        <div className="month"></div>
                        <div className="interacted"></div>
                    </div>
                </div>
                <div className="insights">
                    <div className="insights_date">
                        <h3></h3>
                        <span></span>
                    </div>
                    <div className="insight_chart">

                    </div>
                    <div className="insight_percentage">
                        <div className="month"></div>
                        <div className="interacted"></div>
                    </div>
                </div>
            </div>
            <div className="overview_overall">
                <div className="statistics"></div>
                <div className="comparison"></div>
            </div>
        </div>
    </div>
  )
}

export default Overview