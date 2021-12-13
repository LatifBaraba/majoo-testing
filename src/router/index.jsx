import { useRoutes } from 'react-router'

import Home from '../pages/home'

const MyRouter = () => {
    let routes = useRoutes([
        {
            element: <Home />,
            path: '/',
        },
    ])
    return routes
}

export default MyRouter
