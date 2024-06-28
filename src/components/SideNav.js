import { useDispatch, useSelector } from 'react-redux';
import './_side-nav.scss';
import accordionSlice from '../store/slice/accordionSlice';
import { useEffect, useState } from 'react';
import { getCategories } from '../store/slice/categorySlice';
import { filterByPrice, filterProducts } from '../store/slice/productSlice';
const SideNav = () => {
  const accordionData = useSelector(state => state.cr.categories);
  const fetchProductsData = useSelector(state => state.pr);
  const [products,setProducts] = useState();
  const [minPriceLimit, setMinPriceLimit] = useState(10);
  const [maxPriceLimit, setMaxPriceLimit] = useState(130);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  useEffect(()=>{
    setProducts(fetchProductsData.products)
  },[fetchProductsData.status])

  const filterData = (selectedCategory)=>{
    const payload = {selectedCategory,products}
    dispatch(filterProducts(payload))
  }

  const setPriceLimit = (e,stateFlag)=>{
    if(stateFlag === 'max'){
      setMaxPriceLimit(e.target.value);
    }
    else {
      setMinPriceLimit(e.target.value);
    }
  }

  const applyPriceFilter = ()=>{
    const payload = { products, minPriceLimit, maxPriceLimit};
    dispatch(filterByPrice(payload))
  }
  return (
    <div className='side-nav'>
      <div className='section-title'>
        <h3>Category</h3>
      </div>
      <div className='accordion mb-3'>
        {
          accordionData?.map((accordionCategory,i) => (
            accordionCategory.parent_category_id === null &&
            <div className='accordion-item indivisual-category' key={accordionCategory.id}>
              <div className='accordion-header'>
                <button className='accordion-button' data-bs-target={"#collapse" + i} data-bs-toggle="collapse">
                  <div className='category-title'>
                    <a href='#'>{accordionCategory.category}</a>
                  </div>
                </button>
              </div>
              <div className='accordion-collapse collapse show' id={'collapse' + i}>
                <div className='accordion-body'>
                  <ul>
                    {
                      accordionData.map((subCategory) => (
                        accordionCategory.id === subCategory.parent_category_id &&
                        <li className='sub-items' key={subCategory.id}>
                          <a href='#' onClick={()=>filterData(subCategory)}>{subCategory.category}</a></li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <div className='price-filter-container'>
        <div className='section-title'>
          <h3>Filter By Price</h3>
        </div>
        <div>
          <label htmlFor="min">Min : {minPriceLimit}</label>
          <input 
          className='form-range'
           type='range'
           min={10}
           max={130}
           step={10}
           value={minPriceLimit}
           onChange={(e)=>setPriceLimit(e,"min")}
          />
        </div>
        <div>
          <label htmlFor="max">Max : {maxPriceLimit}</label>
          <input 
          className='form-range'
           type='range'
           min={10}
           max={130}
           step={10}
           value={maxPriceLimit}
           onChange={(e)=>setPriceLimit(e,"max")}
          />
        </div>
        <button className='btn btn-outline-dark my-3' onClick={applyPriceFilter}>Apply Filter</button>
      </div>
    </div>
  )
}

export default SideNav
