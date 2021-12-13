import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/reducer'
import { Provider } from 'react-redux'

import MyRoutes from './router/index'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MyRoutes />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
