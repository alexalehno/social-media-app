import classes from './Spinner.module.scss'

export const Spinner = ({ text = '', size = '7em' }) => {
  const header = text ? <h4>{text}</h4> : null;

  return (
    <div className={classes.spinner}>
      {header}
      <div className={classes.loader} style={{ height: size, width: size }}></div>
    </div>
  )
}