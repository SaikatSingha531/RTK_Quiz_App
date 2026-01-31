import { RouterProvider } from 'react-router-dom'
import './App.css'
import Routes from './Routing/Routing'
import { Toaster } from 'sonner'
// import Demo from './Pages/Demo'

function App() {

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">
    <Toaster position='top-center' richColors/>
      <RouterProvider router={Routes}/>
        </div>

    </>
  )
}

export default App
