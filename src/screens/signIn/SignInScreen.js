import React from 'react'
import './SignInScreen.css'
import InputField from '../../globalcomponents/InputField'
import Button from '../../globalcomponents/Button'

const SignInScreen = () => {
    return (
        <div className='SignInCover'>
            <div className='leftSignInCover'>
                <form>
                    <h3 style={{ color : "whitesmoke"}}>welcome back , olivia</h3>
                    <h4 style={{ color : "gray"}}>welcome back please enter your details</h4>
                    <Button variant="dark" color="white">Log in with Google</Button>
                    <InputField type="email" placeholder="Email"></InputField>
                    <InputField type="password"placeholder="Email"></InputField>
                    <div className='doThis' style={{ display : 'flex'}}>
                        <div style={{ color : 'gray'}}>
                            remember me for 30 days
                        </div>
                        <div>
                            <a href="facebook.com">Forgot password</a>
                        </div>
                    </div>
                    <Button>Log In</Button>
                    <div className='noAccount'>
                        <span style={{color : "gray"}}>
                            Dont have an account?
                        </span>
                        <a href="facebook.com">sign up for free</a>
                    </div>
                </form>
            </div>
            <div className='rightSignInCover'></div>
        </div>
    )
}


export default SignInScreen