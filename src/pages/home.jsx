import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../layouts/header'
import Banner from '../layouts/banner'
import { fetchTodo, addTodo, deleteTodo } from '../store'

const Home = () => {
    const dispatch = useDispatch()
    const { todoActive, todoUnActive, loading, error } = useSelector(state => state.todo)

    const [input, setInput] = useState()

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
                        <input type='email' className='form-control' placeholder='new todo' onChange={(e) => setInput(e.target.value)}/>
                    </div>
                    <div className='col-md-2'>
                        <button type='button' className='btn btn-outline-success' onClick={() => dispatch(addTodo(input))}>
                            Add Todo
                        </button>
                    </div>
                </div>
            </section>

            <div className='section-list-todo'>
                <div className='row my-3'>
                    <h2>Active Todo</h2>
                    <div className='active-todo'>
                        <div className='row g-4'>
                            {todoActive ? (
                                todoActive.map((value, idx) => (
                                    <div className='col-12 todo d-flex flex-row' key={idx}>
                                        <h2>{value.title}</h2>
                                        <button type='button' className='btn btn-outline-success ms-auto' onClick={() => dispatch(deleteTodo(value))}>
                                            delete
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <span>Loading</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h2>Un-active Todo</h2>
                    <div className='filter'>
                        <span>Asc</span>
                    </div>
                    <div className='active-todo'>
                        <div className='row g-4'>
                            {todoUnActive ? (
                                todoUnActive.map((value, idx) => (
                                    <div className='col-12 todo' key={idx}>
                                        <h2>{value.title}</h2>
                                    </div>
                                ))
                            ) : (
                                <span>Loading</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
