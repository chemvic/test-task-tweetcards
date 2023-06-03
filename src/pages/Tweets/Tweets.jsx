import css from './Tweets.module.css';
import Card from 'components/Card';
 const Tweets = () => {
  const data=[
    {
     "createdAt": "2023-06-01T10:17:19.663Z",
     "user": "Sue Doyle",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/448.jpg",
     "tweets": 76,
     "followers": 30,
     "id": "1"
    },
    {
     "createdAt": "2023-06-01T17:40:34.662Z",
     "user": "Fannie Schaefer",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg",
     "tweets": 25,
     "followers": 43,
     "id": "2"
    },
    {
     "createdAt": "2023-06-01T01:05:23.972Z",
     "user": "Arnold Thompson",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg",
     "tweets": 46,
     "followers": 64,
     "id": "3"
    },
    {
     "createdAt": "2023-06-01T07:20:16.044Z",
     "user": "Ms. Tommy Konopelski",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg",
     "tweets": 88,
     "followers": 69,
     "id": "4"
    },
    {
     "createdAt": "2023-06-01T06:46:47.514Z",
     "user": "Roberto Larkin",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg",
     "tweets": 27,
     "followers": 81,
     "id": "5"
    },
    {
     "createdAt": "2023-06-01T16:39:37.977Z",
     "user": "Willie Champlin",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/969.jpg",
     "tweets": 14,
     "followers": 52,
     "id": "6"
    },
    {
     "createdAt": "2023-06-01T08:26:01.353Z",
     "user": "Byron Turner",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/931.jpg",
     "tweets": 17,
     "followers": 16,
     "id": "7"
    },
    {
     "createdAt": "2023-05-31T20:14:49.886Z",
     "user": "Guy Harvey",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/442.jpg",
     "tweets": 94,
     "followers": 89,
     "id": "8"
    },
    {
     "createdAt": "2023-06-01T05:42:29.105Z",
     "user": "Mr. Kelley Gulgowski",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
     "tweets": 74,
     "followers": 39,
     "id": "9"
    },
    {
     "createdAt": "2023-06-01T00:25:38.258Z",
     "user": "Marianne Stehr",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/71.jpg",
     "tweets": 62,
     "followers": 34,
     "id": "10"
    },
    {
     "createdAt": "2023-06-01T13:31:32.439Z",
     "user": "Jeffrey Maggio",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
     "tweets": 17,
     "followers": 86,
     "id": "11"
    },
    {
     "createdAt": "2023-05-31T20:21:03.528Z",
     "user": "Mr. Everett Waelchi",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/374.jpg",
     "tweets": 93,
     "followers": 90,
     "id": "12"
    }
   ];
    return (<div className={css.container}>
          <ul className={css.users}>
        {data
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
    </div>
      
    );
};

export default Tweets;