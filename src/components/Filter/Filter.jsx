import { LabelFilter, InputFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/Contact/selectors';
import { setFilter } from 'redux/Contact/filterSlice';

export const Filter = () => {
    const filterValue = useSelector(getFilterValue)
    const dispatch = useDispatch();
    
  return (
    <div>
        <LabelFilter >Find contacts by name</LabelFilter>

        <InputFilter
              type="text"
              value={filterValue}
              name="filter"
              onChange={(e) => dispatch(setFilter(e.target.value))}
        />
    </div>
        );
};

