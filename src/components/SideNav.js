import { useSelector } from 'react-redux';
import './_side-nav.scss';
import accordionSlice from '../store/slice/accordionSlice';
const SideNav = () => {
  const accordionData = useSelector(accordionSlice.getInitialState);

  return (
    <div className='side-nav'>
      <div className='section-title'>
        <h3>Category</h3>
      </div>
      <div className='accordion'>
        {
          accordionData.map((accordionCategory, i) => (
            <div className='accordion-item indivisual-category' key={i}>
              <div className='accordion-header'>
                <button className='accordion-button' data-bs-target={"#collapse"+i} data-bs-toggle="collapse">
                  <div className='category-title'>
                    <a href='#'>{accordionCategory.ctaegory}</a>
                  </div>
                </button>
              </div>
              <div className='accordion-collapse collapse show' id={'collapse'+i}>
                <div className='accordion-body'>
                  <ul>
                    {
                      accordionCategory.items.map((item,index) => (
                        <li className='sub-items' key={index}><a href='#'>{item}</a></li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default SideNav
