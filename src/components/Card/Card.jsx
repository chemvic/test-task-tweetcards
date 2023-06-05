import PropTypes from 'prop-types';
import {toggleFollow} from 'redux/following/followSlice';
import { updateUser } from 'redux/users/operations';
// import {selectIsFollowed} from 'redux/following/selectors';
import { useSelector, useDispatch  } from 'react-redux';
import { changeFollowers } from 'redux/users/usersSlice';
import css from './Card.module.css';

 const Card = ({
    user,
    id,
    avatar,
    followers,
    tweets,
    isFollowed
    }) => {
        const dispatch=useDispatch();
        const followed=useSelector((state) => state.follow[id]);

        let newData={};

        if(!isFollowed){
             newData={
                
                    followers:700,
                    isFollowed: true,
                  
            }
        }else{
            newData={
                
                    followers:700,
                    isFollowed: false,
            
        }}
    
        const handleClick = () => {
      
            dispatch(toggleFollow(id));
            dispatch(updateUser(id, {
                
                followers:700,
                isFollowed: true,
              
        }));
           
            // dispatch(changeFollowers({ id, followers:followers + (followed ? -1 : 1) }));
                
          };
        
    return (
        <div className={css.card}>
 
    <img
      src={avatar}
      alt={user}
      className={css.avatar} 
    />
    <p className={css.name}>{tweets} tweets</p>
    <p className={css.followers}>{followers} followers</p>
    <button className='button' onClick={()=>{handleClick(id)}} style={{ backgroundColor: followed ? '#5CD3A8' : '#EBD8FF' }}>
        {followed ? 'Following' : 'Follow'}
      </button>

</div>
    );
};

Card.propTypes={
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
export default Card;
