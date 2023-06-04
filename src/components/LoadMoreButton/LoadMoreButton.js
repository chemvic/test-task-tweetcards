import css from './LoadMoreButton.module.css';
import {  useDispatch  } from 'react-redux';
import {incrementLimit} from 'redux/currentLimit/currentLimitSlice';
const LoadMoreButton =()=>{
const dispatch = useDispatch();

const handleIncrement=()=>{
    dispatch(incrementLimit());
}

    return(
        <button type='button' onClick={handleIncrement} className={css.button}>LOAD MORE</button>

    )
};
export default LoadMoreButton;