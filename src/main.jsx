import React from 'react'
import ReactDOM from 'react-dom'
import './tailwind.css'
import App from './pages/app/App'
import AppLayout from './components/Layouts/AppLayout'

ReactDOM.render(
  <React.StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </React.StrictMode>,
  document.getElementById('root')
)
