import classes from './Pagination.module.scss';
import { getPageNumbers } from '../../functions/functions';
import { useState, useEffect } from 'react';

const DESKTOP_VISIBLE_PAGES = 7;
const MOBILE_VISIBLE_PAGES = 4;

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const [visiblePages, setVisiblePages] = useState(DESKTOP_VISIBLE_PAGES);
  const pageNumbers = getPageNumbers(currentPage, totalPages, visiblePages);

  useEffect(() => {
    const handleResize = () => {
      setVisiblePages(window.innerWidth < 600 ? MOBILE_VISIBLE_PAGES : DESKTOP_VISIBLE_PAGES);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes.pagination}>
      <button 
        className={classes.button}
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button> 

      {
        pageNumbers.map((pageNumber) => (
          <button 
            className={classes.button}
            key={pageNumber} 
            onClick={() => onPageChange(pageNumber)} 
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button> 
        ))
      }

      <button 
        className={classes.button}
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button> 
    </div>
  );
}