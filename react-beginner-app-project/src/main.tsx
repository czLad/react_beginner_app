import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
//v If import successful hello world should move
//to top
import 'bootstrap/dist/css/bootstrap.css'
//v Component tree
//Can use ReactNative. for mobile apps
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //v App component
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
