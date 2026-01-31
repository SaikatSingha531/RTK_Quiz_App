// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './Hooks/Redux_Toolkit/Store/Store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  // </StrictMode>,
)
