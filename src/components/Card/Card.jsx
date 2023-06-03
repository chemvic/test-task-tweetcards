import PropTypes from 'prop-types';
import css from './Card.module.css';

 const Card = ({
    user,
    id,
    avatar,
    followers,
    tweets,
    }) => {
  
    return (
        <div className={css.card}>
 
    <img
      src={avatar}
      alt={user}
      className={css.avatar} 
    />
    <p className={css.name}>{tweets} tweets</p>
    <p className={css.followers}>{followers} followers</p>
    <button className='button'>follow</button>

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