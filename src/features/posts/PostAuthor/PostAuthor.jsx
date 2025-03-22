import classes from './PostAuthor.module.scss';

export const PostAuthor = ({ userId, users }) => {
  const author = users.find(user => user.id === userId);

  return (
    <span className={classes.author}>
      by {author ? author.name : 'Unknown author' }
    </span>
  );
}