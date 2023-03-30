import { Title } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch()
  const filter=useSelector(state=>state.filter)
  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(updateFilter(value))
  };
  
    return (
      <Title>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={changeFilter} />
      </Title>
    );
}