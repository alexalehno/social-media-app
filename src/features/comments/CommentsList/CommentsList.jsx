import classes from './CommentsList.module.scss'
import { useGetCommentsQuery } from '../../api/apiSlice';
import { Spinner } from '../../../components/Spinner/Spinner';

const CommentsItem = ({ name, body, email }) => {
  return (
    <li className={classes.commentsItem}>
      <h4 className={classes.title}>{name}</h4>
      <p>{body}</p>
      <span className={classes.email}>{email}</span>
    </li>
  )
}

export const CommentsList = ({ postId }) => {
  const { data: comments = [], isLoading } = useGetCommentsQuery();
  const postComments = comments.filter(comment => comment.postId === +postId)

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  
   
  return (
    <div className={classes.commentsBlock}>
      <h3>Comments</h3>
      <ul>
        {
          postComments.map(comment => (
            <CommentsItem 
              key={comment.id} 
              name={comment.name} 
              body={comment.body}
              email={comment.email}
            />
          ))
        }
      </ul>
    </div>
  );
}
