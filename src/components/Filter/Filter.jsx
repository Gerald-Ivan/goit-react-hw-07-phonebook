import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import css from './filter.module.css'
export const Filter = () => {
  const dispatch = useDispatch();
  const { findBy, value } = useSelector(getFilter);
  const handleSearch = e => {
    dispatch(setFilter({ value: e.target.value, findBy }));
  };

  const handleFindBy = e => {
    e.preventDefault();
    dispatch(setFilter({ value, findBy: findBy === 'name' ? 'number' : 'name' }))
  };

  return (
    <div className={css.searchCont}>
     <input type="search" placeholder='Search by name' onChange={handleSearch} />
      <div>
        <button type="button" style={{ width: '75px' }}
        onClick={handleFindBy}>Search</button>
      </div>
    </div>
  )
}