import React from 'react'
import {Link} from 'react-router-dom'
import { Timeline, Divider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import Tooltip from '@mui/material/Tooltip'

const Education = props => {
    return (
        <div className="pt-4 _education">
            <div className="timeline-container">
            <Link to="/">
                <span className='back-icon'>
                    <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM42 7L1 7L1 9L42 9L42 7Z" fill="#6C6C6C"/>
                    </svg>
                </span>
            </Link>
                <div className="wrapper-timeline pt-4">
                    <div className="heading mb-4 d-inline">
                        <h3 className="mb-4 timeline-heading">
                        {/* <svg className="mb-2 mr-2 hat" width="34" height="34" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5001 16.1978L5.44568 13.7188V16.1577V17.8591C5.44568 19.7732 9.05295 21.3251 13.5025 21.3251C17.9518 21.3251 21.5597 19.7732 21.5597 17.8591C21.5597 17.844 21.5547 17.8289 21.5544 17.8142V13.7188L13.5001 16.1978Z" fill="#B2B2B2"/>
                            <path d="M0 10.8687L2.87741 11.898L3.12262 11.3728L4.1797 11.2829L4.33042 11.4398L3.42334 11.6549L3.29114 12.0462C3.2909 12.0462 1.24221 16.3292 1.5431 18.4244C1.5431 18.4244 2.8219 19.1873 4.10014 18.4244L4.43984 12.6958V12.2189L6.34259 11.7897L6.2082 12.1206L4.78953 12.5819L5.44567 12.8163L13.5001 15.2954L21.5544 12.8163L27 10.8687L13.5001 5.67493L0 10.8687Z" fill="#B2B2B2"/>
                        </svg> */}
                        Education</h3>
                    </div>
                    <div className="timeline">
                    <Timeline>
                    <Tooltip 
                        title = {
                            <React.Fragment>
                                <img src="https://qph.fs.quoracdn.net/main-qimg-61328122203fcdd5734f4c0395cbf683-lq" className="img img-fluid" alt="" />
                            </React.Fragment>
                        }
                        arrow
                    >
                        <Timeline.Item>2016<br/>Delhi Public School, Azaad Nagar, Kanpur</Timeline.Item>
                    </Tooltip>
                    <Tooltip 
                        title = {
                            <React.Fragment>
                                <img src="http://mantorapublicschool.com/wp-content/uploads/2016/04/mantora_school.jpg" className="img img-fluid" alt="" />
                            </React.Fragment>
                        } 
                        arrow
                    >
                        <Timeline.Item>2018<br/>Mantora Public School, Kalyanpur, Kanpur</Timeline.Item>
                    </Tooltip>
                    <Tooltip 
                        title = {
                            <React.Fragment>
                                <img src="https://images.thequint.com/thequint%2F2017-09%2Fa1ef2157-7bbd-436f-9dda-a246a380bec6%2F7a2be1bb-85b8-4052-9397-10a9e10ea81b.jpg?rect=0%2C0%2C569%2C320" className="img img-fluid" alt="" />
                            </React.Fragment>
                        } 
                        arrow
                    >
                        <Timeline.Item>2020-present<br/>Indian Institute of Technology, Kanpur</Timeline.Item>
                    </Tooltip>
                    </Timeline>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education