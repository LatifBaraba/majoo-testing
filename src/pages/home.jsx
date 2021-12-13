import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../layouts/header'
import Banner from '../layouts/banner'
import { fetchTodo } from '../store'

const Home = () => {
    const dispatch = useDispatch()
    const { todoActive, todoUnActive, loading, error } = useSelector((state) => state.todo)
    console.log(todoActive, todoUnActive, loading, error)

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    return (
        <div className='container'>
            <Header />
            <Banner />
            <section className='section-todo'>
                <div className='row justify-content-center g-2'>
                    <div className='col-md-6'>
                        <input type='email' className='form-control' placeholder='new todo' />
                    </div>
                    <div className='col-md-2'>
                        <button type='button' className='btn btn-outline-success'>
                            Add Todo
                        </button>
                    </div>
                </div>
            </section>

            <div className='section-list-todo'>
                <div className='row my-3'>
                    <h2>Active Todo</h2>
                    <div className='active-todo'>
                        <div className='todo'>
                            <h3>todo satu</h3>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h2>Un-active Todo</h2>
                    <div className='active-todo'>
                        <div className='todo'>
                            <h3>todo dua</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
