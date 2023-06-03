import css from './LoadMoreButton.module.css';
import {  useDispatch  } from 'react-redux';
import {incrementPage} from 'redux/currentPage/currentPageSlice';
const LoadMoreButton =()=>{
const dispatch = useDispatch();

const handleIncrement=()=>{
    dispatch(incrementPage());
}

    return(
        <button type='button' onClick={handleIncrement} className={css.button}>LOAD MORE</button>

    )
};
export default LoadMoreButton;