import classes from './Pagination.module.scss';
import { joinStyles, createNumberArray } from '../../functions/functions';

export const Pagination = ({ limit, page, totalCount, onPageChange }) => {
  const numberOfPage = Math.ceil(totalCount/limit);
  const numberOfPageArr = createNumberArray(numberOfPage);
  
  if (numberOfPage === 1) {
    return null;
  }
  
  return (
    <div className={classes.paginationBlock}>
      {
        numberOfPageArr.map(num => (
          <span 
            className={ num===page 
              ? joinStyles([classes.pageNumBtn, classes.active]) 
              : classes.pageNumBtn
            } 
            onClick={()=>onPageChange(num)}
            key={num}
          >
            {num}
          </span>
        ))
      }
    </div>
  )
}