import { useDispatch, useSelector } from 'react-redux';
import './_products.scss';
import { getProducts } from '../store/slice/productSlice';
import { useEffect } from 'react';
import { addCartItem } from '../store/slice/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = useSelector(state=>state.pr.products);
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const addToCart = (data)=>{
        const payload = { ...data, quantity:1}
        dispatch(addCartItem(payload))
    }
    return (
        <div className='product-container'>
            {
                products.map((product,i) => 
                <div className='mx-5 p-3 col-lg-4 col-xl-3 col-md-6 product-card' key={i}>
                    <div className='product-image-container'>
                        <img src={require('../assets/images/shop/'+product.img)} />
                    </div>
                    <div className='product-info'>
                        <h5><Link to='/productDetails' state={product}>{product.pName}</Link></h5>
                        <p className='product-price'>${product.price}</p>
                        <div className='product-rating'>
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                        </div>
                    </div>
                    <div className='my-3' onClick={()=>addToCart(product)}>
                       <div className='cart-btn'> 
                          <div className='cart-icon-container'>
                            <i className='fa fa-shopping-cart' />
                          </div>
                          <div className='cart-text-container'>
                            <p>Add to Cart</p>
                          </div>
                       </div>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Products
