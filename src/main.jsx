import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/authContext.jsx";
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import './assets/lib/bootstrap/css/bootstrap.min.css';
import './assets/lib/bootstrap/js/bootstrap.bundle.min.js';

const store = configureStore({
    reducer: {

    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <AuthProvider>
                <App />
              </AuthProvider>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
