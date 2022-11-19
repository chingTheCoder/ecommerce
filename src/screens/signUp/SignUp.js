import React, { useContext } from 'react'
import { UserContext } from '../MainScreen/../../context/UserContext.js'
import InputField from "../../globalcomponents/InputField.js"
import Button from "../../globalcomponents/Button.js"
import './SignUp.css'

const SignUpScreen = () => {

    const {setUserState } = useContext(UserContext)

    return (
        <div className='SignUpCover'>
            <div className='left'>
                <div class="description">
                    <h3>Benefits of your free IMDb account</h3>
                    <div>
                        <h4>Personalized Recommendations</h4>
                        <h4>Discover shows you'll love</h4>
                    </div>
                    <div>
                        <h4>Your Ratings</h4>
                        <h4>Rate and remember everything you've seen</h4>
                    </div>
                    <div>
                        <h4>Contribute to IMDb</h4>
                        <h4>And data that will be seen by millions of people and get cool badges</h4>
                    </div>
                </div>
            </div>
            <div class='right'>
                <form>
                    <h3 style={{ color : 'whitesmoke'}}>Create an account</h3>
                    <h5 style={{color : 'gray'}}>Lets get started with your 30 days free trial </h5>
                    <InputField type="text" placeholder="Name"/>
                    <InputField type="email" placeholder="Email"/>
                    <InputField type="Password" placeholder="Password"/>
                    <div style={{ margin : '40px 0 20px 0'}}>
                        <Button onClick={()=>setUserState('login')} border='no'>Create a new account</Button>
                    </div>
                    <Button variant="dark" color="white">Sign up with Google</Button>
                    <h6>already have an account 
                        <button 
                        onClick={()=>setUserState('login')}
                        href="facebook.com">Log In</button></h6>
                </form>
            </div>
        </div>
    )
}


export default SignUpScreen