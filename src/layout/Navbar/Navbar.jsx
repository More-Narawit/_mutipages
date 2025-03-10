import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar({ products, carts, tab, setTab, setToken, role }) {

    return (
        <div className='navbar-container'>

            <Link to={'/home'}>
                <button className={'btn ' + (tab === 'home' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('home')}>Home</button>
            </Link>
            <Link to={'/bill'}>
                <button className={'btn ' + (tab === 'bill' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('bill')}>Bill</button>
            </Link>
            <Link to={'/animation'}>
                <button className={'btn ' + (tab === 'animation' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('animation')}>Animation</button>
            </Link>
            <Link to={'/todo'}>
                <button className={'btn ' + (tab === 'todo' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('todo')}>Todo</button>
            </Link>
            {role !== 'user'&& role !== 'guest' && (
            <Link to={'/calculator'}>
                <button className={'btn ' + (tab === 'calculator' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('calculator')}>Calculator</button>
            </Link>
            )}

            <Link to={'/component'}>
                <button className={'btn ' + (tab === 'component' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('component')}>Component</button>
            </Link>
            <Link to={'/product'}>
                <button className={'btn ' + (tab === 'product' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('product')}>Product({products.length})</button>
            </Link>
            <Link to={'/cart'}>
                <button className={'position-relative btn ' + (tab === 'cart' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('cart')}>
                    Carts
                    {
                        carts.length > 0 && (
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {carts.length < 10 ? carts.length : '9+'}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        )
                    }
                </button>
            </Link>
            <button className='btn btn-outline-danger' style={{ marginLeft: '1rem' }} onClick={() => {
                setToken('')
            }}>
                Log out
            </button>
        </div>
    )
}
export default Navbar