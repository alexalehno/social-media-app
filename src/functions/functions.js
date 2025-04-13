export const joinStyles = (classes) => [...classes].join(' ');

export const setColor = () => {
  const randomRange = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;
  const [a, b, c] = [randomRange(0, 225), randomRange(0, 225), randomRange(0, 225)];

  return `rgb(${225 - a}, ${225 - b}, ${225 - c})`;
}

export const createArrayFrom = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export const getPageNumbers = (currentPage, totalPages, visiblePages) => {
  const pageNumbers = [];
  const maxPagesBeforeCurrentPage = Math.floor(visiblePages / 2);
  const maxPagesAfterCurrentPage = Math.ceil(visiblePages / 2) - 1;

  let startPage = currentPage - maxPagesBeforeCurrentPage;
  let endPage = currentPage + maxPagesAfterCurrentPage;

  if (startPage < 1) {
    endPage = Math.min(totalPages, endPage + (1 - startPage));
    startPage = 1;
  }

  if (endPage > totalPages) {
    startPage = Math.max(1, startPage - (endPage - totalPages));
    endPage = totalPages;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};