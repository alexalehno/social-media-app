import classes from './PostPage.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetPostsQuery, useGetUsersQuery } from '../../api/apiSlice';
import { Spinner } from '../../../components/Spinner/Spinner';
import { PostAuthor } from '../PostAuthor/PostAuthor';
import { CommentsList } from '../../comments/CommentsList/CommentsList';

export const PostPage = () => {
  const { postId } = useParams();
  const { data: posts = [], isLoading } = useGetPostsQuery();
  const { data: users = [] } = useGetUsersQuery();

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }   

  const {title, body, userId} = posts.find(post => post.id === +postId)

  return (
    <section className='container'>
      <article>
        <h2 className={classes.title}>{title}</h2>
        <PostAuthor userId={userId} users={users}/>
        <p className={classes.body}>{body}</p>
        <Link className={classes.editPostBtn} to={``}>Edit Post</Link>
        <CommentsList postId={postId}/>
      </article>
    </section>
  )
}