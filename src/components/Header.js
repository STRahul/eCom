import { useSelector } from 'react-redux';
import './_header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
    const cartItemCount = useSelector(state => state.cart.totalItems);
    return (
<>
        <header className='header bg-dark d-none d-lg-block'>
            <div className='row header-row'>
                <Link className='brand my-1'>
                    <h1>eCom</h1>
                </Link>
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
                        <Link to="/cart">
                            <li className='list-icon'><i className='fa fa-shopping-cart' />
                                {cartItemCount !== 0 ?
                                    <div className='cart-item-count'>
                                        <p>{cartItemCount}</p>
                                    </div>
                                    : <></>
                                }
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>


        <header className='mb-header bg-dark d-lg-none'>
            <div className='row mb-header-row'>
                <div className='row-child'>
                    <Link to="/" className='mb-brand my-1'>
                        <h1>eCom</h1>
                    </Link>
                    <div className='mb-login p-0'>
                        <i className='fa fa-user-circle user-icon' />
                        <h5><a href='#'>Login</a></h5> / <h5><a href='#'>Register</a></h5>
                    </div>
                    <div className='mb-cart-wishlist'>
                        <ul className='p-0'>
                            <li className='list-icon'><i className='fa fa-heart' /></li>
                            <Link to="/cart">
                                <li className='b-list-icon'><i className='fa fa-shopping-cart' />
                                    {cartItemCount !== 0 ?
                                        <div className='cart-item-count'>
                                            <p>{cartItemCount}</p>
                                        </div>
                                        : <></>
                                    }
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mb-container mx-2'>
                <div className='row input-mb-container w-85 bg-white'>
                    <div className='mb-dropdown m-0 p-0'>
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
            </div>

        </header>
     </>
    )
}

export default Header
