import classes from './UserPage.module.scss';
import { useParams } from 'react-router-dom';
import { useGetUsersQuery, useGetPostsQuery } from '../../api/apiSlice';
import { setColor } from '../../../functions/functions';
import { joinStyles } from '../../../functions/functions';
import { PostExcerpt } from '../../posts/PostExcerpt/PostExcerpt';
 
export const UserPage = () => {
  const { userId } = useParams();
  const { data: users = [], isLoading } = useGetUsersQuery();
  const { data: posts = [] } = useGetPostsQuery();
 
  if (isLoading) {
    return <section className='container'>Загрузка...</section>;
  }   

  const userPosts = posts.filter(post => post.userId === +userId);
  const { name,  email, address, phone, company } = users?.find(user => user.id === +userId);
  
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
          userPosts.map(post => (
            <PostExcerpt post={post} users={users} key={post.id}/>
          ))
        }       
      </div>
    </section>
  );
}