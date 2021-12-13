import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

import MyRoutes from './router/index'

ReactDOM.render(
    <BrowserRouter>
        <MyRoutes />
    </BrowserRouter>,
    document.getElementById('root')
)
