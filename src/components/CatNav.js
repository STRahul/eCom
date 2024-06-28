import { useDispatch, useSelector } from 'react-redux'
import './_cat-nav.scss'
import { useEffect } from 'react';
import { getCategories } from '../store/slice/categorySlice';
import { Link } from 'react-router-dom';
const CatNav = () => {
  const categories = useSelector(state => state.cr.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <div className="cat-nav-container container">
      <ul>
        <li className='list-items'>
          <Link>Home</Link>
        </li>
        {
          categories?.map((c) =>
            c.parent_category_id === null &&
            <li className="list-items" key={c.id}><a href="#">{c.category}</a></li>)
        }

      </ul>
    </div>
  )
}

export default CatNav
