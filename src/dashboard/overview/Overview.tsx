import React from 'react'
import DashHead from '../../components/dashHead/DashHead';
import './overview.css';
import LineChart from '../../utils/LineChart';

import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { insightData } from '../../data/data';
import BarChart from '../../utils/BarChart';
import { reactionChartData, statisticsChartData } from '../../data/chartData';
import DoughnutChart from '../../utils/DoughnutChart';

function Overview() {
    const insight = insightData;

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

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
                    {
                        insight.map((ins, ind) => (
                            <div key={ind} className="insights">
                                <div className="insights_date">
                                    <h3>{ins.title}</h3>
                                    <div className="select_mth">
                                        <select name="" id="">
                                            {
                                                months.map((mth) => (
                                                    <option value={mth} key={mth}>{mth}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="insight_chart">
                                    <h3>{ins.percentage}%</h3>
                                    <LineChart chartType={ins.chartData} />
                                </div>
                                <div className="insight_percentage">
                                    <div className="month">
                                        <p className={ins.change.includes('-') ? 'minus' : 'add'}>{ins.change}</p>
                                        <p>this month</p>
                                        <MdKeyboardDoubleArrowUp className={ins.change.includes('-') ? 'minusI' : 'addI'} />
                                    </div>
                                    <div className="interacted"></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="overview_overall">
                    <div className="statistics">
                        <div className="statistics_head">
                            <h3>All posts</h3>
                            <div className="select_mth">
                                <select name="" id="">
                                    <option value="Last week">Last week</option>
                                </select>
                            </div>
                        </div>
                        <div className="statistics_data">
                            <BarChart chartType={statisticsChartData} />
                        </div>
                    </div>
                    <div className="comparison">
                        <div className="comparison_head">
                            <h3>Post reactions</h3>
                            <div className="select_mth">
                                <select name="" id="">
                                    {
                                        months.map((mth) => (
                                            <option value={mth} key={mth}>{mth}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="comparison_data" style={{width: '100%'}}>
                            <DoughnutChart chartType={reactionChartData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview