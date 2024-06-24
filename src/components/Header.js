import './_header.scss';
const Header = () => {
    return (
        <header className='header bg-dark'>
            <div className='row header-row'>
                <div className='brand my-1'>
                    <h1>eCom</h1>
                </div>
                <div className='inp-container my-4 p-0 w-50 h-25 bg-white'>
                    <div className='dropdown m-0 p-0'>
                        <select className='select-btn m-0 py-0 px-3 w-100'>
                            <option value="">Men</option>
                            <option value="">Women</option>
                            <option value="">Kids</option>
                        </select>
                    </div>
                    <input type='text' className='form-control' placeholder='Search....' />
                    <button>
                        <i className='fa fa-search' />
                    </button>
                </div>
                <div className='login-container p-0'>
                    <i className='fa fa-user-circle user-icon' />
                    <h5><a href='#'>Login</a></h5> / <h5><a href='#'>Register</a></h5>
                </div>
                <div className='cart-wishlist'>
                    <ul className='p-0'>
                        <li className='list-icon'><i className='fa fa-heart' /></li>
                        <li className='list-icon'><i className='fa fa-shopping-cart' /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
