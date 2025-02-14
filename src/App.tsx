

import AboutMe from './components/About/AboutMe'
import Body from './components/body/Body'
import NavBar from './components/header/NavBar'

function App() {
 

  return (
    <div className='main'>
     <NavBar/>
    <div className='main-body'>
    <Body/>
    </div>
    <AboutMe/>


    </div>
  )
}

export default App
