import { RouterProvider } from 'react-router-dom'
import './App.css'
import QuizContainer from './Components/QuizContainer'
import Routes from './Routing/Routing'
// import Demo from './Pages/Demo'

function App() {

  return (
    <>
      {/* <QuizContainer/> */}
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
