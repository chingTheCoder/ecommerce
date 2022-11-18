import React from "react"

const RightContent = () => {
    return(
        <div className='rightContent'>
                <h3>Categories</h3>
                <div className='sideSection'>
                    <ul>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Animated</li>
                        <li>Comedy</li>
                        <li>Crime</li>
                        <li>Fantasy</li>
                    </ul>
                    <span>see more</span>
                </div>
                <h3>Services <span>Unpack All</span></h3>
                <div className='sideSection'>
                    <ul>
                        <li>Netflix</li>
                        <li>Prime video</li>
                        <li>Disney +</li>
                        <li>HBO max</li>
                        <li>Hulu</li>
                        <li>Starz</li>
                    </ul>
                    <span>see more</span>
                </div>
                <ul className="filters">
                    <li>Filters</li>
                    <li>Mood</li>
                    <li>Year</li>
                    <li>Language</li>
                    <li>Age rating</li>
                </ul>
            </div>
    )
}

export default RightContent