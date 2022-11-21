import React from "react"
import ProfiePic from '../../../images/karol.webp'
import { AiOutlineBell } from'react-icons/ai'

const RightContent = () => {
    return(
        <div className='rightContent'>
                <div className="userProfile">
                    <div className="notification">
                        <div className="bell">
                            <AiOutlineBell></AiOutlineBell>
                        </div>
                    </div>
                    <div className="profilePicCover">
                    <img src={ProfiePic} alt='profilepic'></img>
                    </div>
                </div>
                <h3>Categories</h3>
                <div className='sideSection'>
                    <ul>
                        <li>Action <input type='checkbox' checked></input></li>
                        <li>Adventure <input type='checkbox' checked></input></li>
                        <li>Animated <input type='checkbox' checked></input></li>
                        <li>Comedy <input type='checkbox' checked></input></li>
                        <li>Crime <input type='checkbox' checked></input></li>
                        <li>Fantasy <input type='checkbox' checked></input></li>
                    </ul>
                    <span>see more</span>
                </div>
                <h3>Services <span>Unpack All</span></h3>
                <div className='sideSection'>
                    <ul>
                        <li>Netflix <input type='checkbox' checked></input></li>
                        <li>Prime video <input type='checkbox' checked></input></li>
                        <li>Disney + <input type='checkbox' checked></input></li>
                        <li>HBO max <input type='checkbox' checked></input></li>
                        <li>Hulu <input type='checkbox' checked></input></li>
                        <li>Starz <input type='checkbox' checked></input></li>
                    </ul>
                    <span>see more</span>
                </div>
                <ul className="filters">
                    <li>Filters </li>
                    <li>Mood </li>
                    <li>Year </li>
                    <li>Language </li>
                    <li>Age rating </li>
                </ul>
            </div>
    )
}

export default RightContent