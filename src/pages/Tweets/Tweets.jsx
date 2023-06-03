import css from './Tweets.module.css';
import Card from 'components/Card';
import LoadMoreButton from 'components/LoadMoreButton';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {store} from "redux/store.js";


import { useEffect } from "react";
import { fetchUsers } from "redux/users/operations";
import { selectUsers, selectIsLoading, selectError } from 'redux/users/selectors';

const Tweets = () => {

const dispatch= useDispatch();

     const users=useSelector(selectUsers);
     const isLoading = useSelector(selectIsLoading);   
     const error = useSelector(selectError);
     const state = store.getState();
     const page=state.currentPage.page;

     useEffect(() => {
           
      dispatch(fetchUsers(page));
     
     }, [dispatch, page]);

  
 
    return (<div className={css.container}>

{isLoading && !error && <Loader visible={true}/>}
          <ul className={css.users}>
        {users
             .map(({  user,
                id,
                avatar,
                followers,
                tweets}) => (
       <Card key={id} user={user} avatar={avatar} followers={followers}
       tweets={tweets}
        id={id}/>
             ))}
        </ul>

        <Link to="/" className={css.backBtn}>Back</Link>
        <LoadMoreButton/>
    </div>
      
    );
};

export default Tweets;