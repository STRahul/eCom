import { useDispatch } from 'react-redux';
import './_product-details.scss';
import { useLocation } from "react-router-dom"
import { addCartItem } from '../store/slice/cartSlice';

const ProductDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(addCartItem(location.state));
  }
  return (
    <div>
      <div className="row container my-5 product-details-container">
        <div className="col-5 product-image-container">
          <img src={require('../assets/images/shop/' + location.state.img)} alt={location.state.pName} />
        </div>
        <div className="col-7 product-info">
          <span id='product-name'>{location.state.pName}</span>
          <div className='product-rating'>
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
          </div>
          <hr />
          <div className='product-price'>
            MRP : <span className='price'>{location.state.price}</span>
            <div style={{fontSize: '0.8em'}}>Inclusive of all taxes.</div>
          </div>
          <div className="my-3 product-description">
            Some product description given here...
          </div>
          <div className="my-5" onClick={addToCart}>
            <div className="btn btn-warning cart-button">
              <div className='cart-icon-container'>
                <i className="fa fa-shopping-cart" />
              </div>
              <div className='cart-text-container'>
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
