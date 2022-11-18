import './App.css';
import { useState } from 'react';
import SignUpScreen from './screens/signUp/SignUp.js'
import SignInScreen from './screens/signIn/SignInScreen.js'
import MainScreen from './screens/MainScreen/MainScreen';
import {MovieDetailsContext} from './screens/MainScreen/context/MovieDetailsContext.js'

function App() {

  const [overview, setview] = useState("")

  let x = 3

  if (x === 1) {
    return (
      <SignInScreen></SignInScreen>
    )
  }

  if ( x === 3 ) {
    return (
        <MovieDetailsContext.Provider value={{overview, setview}}>
              <MainScreen></MainScreen>
        </MovieDetailsContext.Provider>
     )
  }
  return (
      <SignUpScreen></SignUpScreen>
  )

}


// function App () {
//   return (
//     <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/movies" element={<Movies/>}/>
//         <Route path="/tvseries" element={<Tvseries/>}/>
//         <Route path="/upcoming" element={<UpComing/>}/>
//     </Routes>
//   )
// }

export default App;
