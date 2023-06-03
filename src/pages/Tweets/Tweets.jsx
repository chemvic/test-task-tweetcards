import css from './Tweets.module.css';
import Card from 'components/Card';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { fetchUsers } from "redux/users/operations";
import { selectUsers, selectIsLoading, selectError } from 'redux/users/selectors';


 const Tweets = () => {
const dispatch= useDispatch();

     useEffect(() => {
      dispatch(fetchUsers());
     }, [dispatch]);

     const users=useSelector(selectUsers);
     const isLoading = useSelector(selectIsLoading);   
     const error = useSelector(selectError);  
  
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
    </div>
      
    );
};

export default Tweets;