import { useDispatch, useSelector } from 'react-redux'
import './_cat-nav.scss'
import { useEffect } from 'react';
import { getCategories } from '../store/slice/categorySlice';
const CatNav = () => {
  const categoryData = useSelector(state=>state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  },[])
  return (
    <div className="cat-nav-container container">
      <ul>
        {
          categoryData?.map((category, i) => 
          <li className="list-items" key={i}><a href="#">{category}</a></li>)
        }

      </ul>
    </div>
  )
}

export default CatNav
