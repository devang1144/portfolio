import React from 'react';
import Me from '../assets/me.jpg'
import {Link} from 'react-router-dom'

const About = props => {
    return (
        <div className="about_me_wrapper">
            <div className="about_me">
                <Link to="/">
                    <span className='back-icon'>
                        <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM42 7L1 7L1 9L42 9L42 7Z" fill="#6C6C6C"/>
                        </svg>
                    </span>
                </Link>
            <br />
            <img style={{pointerEvents: "none"}} src={Me} alt="" className="me img img-fluid" /> <br />
                I’m Devang Singh, a graduate in Civil Engineering from IIT Kanpur, class of 2022. I’m currently working as software development engineer at UniCards <br/><br/>

                I cleared my JEE in the year 2018, with a not-so-good rank :-(. Anyways, that landed me at IIT Kanpur, those years which I’ll never forget.  During these years I started exploring various fields. 

                I was part of IITK Motorsports for about 1.5 years, where I was in drivetrain subsystem. My work was to find the optimal gear combinations using computational methods. <br/><br/>

                During this period, I was attached with coding. So I again started to explore various fields. After a while I found out that, I was naturally aligned towards web development and wanted to go in-depth on how web works <br/><br/>

                Now, I'm much more than simply a student :)’ I enjoy coding, learning investing, gaming, some writings to express myself. I enjoy listening to music especially hard rock and classic rocks of Led Zepellin and Guns’n’Roses<br/><br/>

                I love building websites with smooth UIs (A website with challenging animations is more complex to me). You should look at <a href="https://github.com/devang1144">my github account</a>, all my projects are public and live.<br/><br/>

                Take a look around and read some of the material. There’s some interesting stuff here to see. Don’t forget to come again :)<br/><br/>

                Also, to contact you can ping me via <a href='mailto:devangsingh665@gmail.com'>email</a> or even send connection request on any of my socials (
                &nbsp;<a target="_blank" href="https://instagram.com/dev___ang"><i className="fa fa-instagram" /></a>
                &nbsp;,&nbsp;&nbsp;
                <a target="_blank" href="https://twitter.com/dev__ang"><i className="fa fa-twitter"></i></a>
                &nbsp;,&nbsp;&nbsp;
                <a target="_blank" href="https://www.linkedin.com/in/devang-singh/"><i className="fa fa-linkedin"></i></a>
                )
            </div>

            <span className='socials'>
                <i className="fa fa-instagram" />
            </span>
        </div>
    )
}

export default About