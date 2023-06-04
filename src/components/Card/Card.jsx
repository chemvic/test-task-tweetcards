import PropTypes from 'prop-types';
import {toggleFollow} from 'redux/following/followSlice';
import { updateUser } from 'redux/users/operations';
// import {selectIsFollowed} from 'redux/following/selectors';
import { useSelector, useDispatch  } from 'react-redux';
import css from './Card.module.css';

 const Card = ({
    user,
    id,
    avatar,
    followers,
    tweets,
    }) => {
        const dispatch=useDispatch();
        const isFollowed=useSelector((state) => state.follow[id]);

        let newData={};

        if(!isFollowed){
             newData={
                
                    followers: followers+1,
                    followed: true,
                  
            }
        }else{
            newData={
                
                    followers: followers-1,
                    followed: false,
            
        }}
    
        const handleClick = () => {
            console.log(followers);
            console.log(newData);
            dispatch(toggleFollow(id));
            dispatch(updateUser(id, newData));
            console.log('после',newData);
            console.log('после', followers);
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
    <button className='button' onClick={()=>{handleClick()}} style={{ backgroundColor: isFollowed ? '#5CD3A8' : '#EBD8FF' }}>
        {isFollowed ? 'Following' : 'Follow'}
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