import classes from './UserPage.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetUserPostsQuery, selectUserById } from '../../api/apiSlice';
import { setColor } from '../../../functions/functions';
import { joinStyles } from '../../../functions/functions';
import { PostExcerpt } from '../../posts/PostExcerpt/PostExcerpt';
import { Spinner } from '../../../components/Spinner/Spinner';

export const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector(state => selectUserById(state, userId));
  const { data: posts = [], isLoading } = useGetUserPostsQuery(userId);  

  if (isLoading || !user) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }   
  
  const { name,  email, address, phone, company } = user;
  
  return (
    <section className={joinStyles(['container', classes.page])}>
      <div className={classes.userInfo}>
        <div className={classes.photoName_wrapper}>
          <div className={classes.photo} style={{backgroundColor: setColor()}}></div>
          <h2 className={classes.name}>{name}</h2>
          <p>{company.catchPhrase}</p>
        </div>

        <address className={classes.info_wrapper}>
          <span className={classes.info}>Phone: {phone}</span>
          <span className={classes.info}>Email: {email}</span>
          <span className={classes.info}>City: {address.city}</span>
          <span className={classes.info}>Company: {company.name}</span>
        </address>
      </div>

      <div className={classes.userPosts}>
        <h2>Posts</h2>
        {
          posts.map(post => (
            <PostExcerpt post={post} key={post.id}/>
          ))
        }       
      </div>
    </section>
  );
}