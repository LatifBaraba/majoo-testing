import Todo from '../assets/images/todo.svg'

const Banner = () => {
    return (
        <section className='section-banner'>
            <div className='banner'>
                <img src={Todo} alt='Todo List' />
            </div>
        </section>
    )
}

export default Banner
