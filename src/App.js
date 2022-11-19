import { useState, useContext } from 'react';
import SignUpScreen from './screens/signUp/SignUp.js'
import SignInScreen from './screens/signIn/SignInScreen.js'
import MainScreen from './screens/MainScreen/MainScreen';
import {MovieDetailsContext} from './screens/MainScreen/context/MovieDetailsContext.js'
import { UserContext } from './context/UserContext.js'


function App() {

  const [overview , setview ] = useState("")
  const { userState } = useContext(UserContext)

  let x = 3

  if (userState === 'login') {

    return (
      <SignInScreen></SignInScreen>
    )

  }

  if (userState === 'approved') {
    return (
        <MovieDetailsContext.Provider value={{overview, setview}}>
              <MainScreen></MainScreen>
        </MovieDetailsContext.Provider>
     )
  }

  if (userState === 'createAccount') {
      return (
          <SignUpScreen></SignUpScreen>
      )
  }

  return (
    <SignInScreen></SignInScreen>
  )

}


function MainSite () {

  const [userState , setUserState ] = useState("login")

        return (
            <UserContext.Provider value={{userState, setUserState}}>
                <App/>
            </UserContext.Provider>
        )

}


export default MainSite;
