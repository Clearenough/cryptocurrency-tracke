import { DOTS, usePagination } from '../../hooks/usePagination';
import styles from './Pagination.module.scss';

interface IProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

function Pagination({ onPageChange, totalCount, siblingCount, currentPage, pageSize }: IProps) {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  console.log(totalCount, siblingCount, currentPage, pageSize);

  if (paginationRange) {
    const lastPage = paginationRange[paginationRange.length - 1];
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const totalAmountOfPages = Math.ceil(totalCount / pageSize);

  return (
    <ul className={styles.paginationBar}>
      <li
        className={`${styles.left} ${styles.indicator} ${currentPage === 1 ? styles.inactive : ''}`}
        onClick={onPrevious}
      >
        {'<'}
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            // eslint-disable-next-line react/jsx-key
            return <li className={[styles.dotsIndicator, styles.indicator].join(' ')}>&#8230;</li>;
          }

          return (
            // eslint-disable-next-line react/jsx-key
            <li
              className={`${styles.pageIndicator} ${styles.indicator} ${
                pageNumber === currentPage ? styles.active : ''
              }`}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}

      <li
        className={`${styles.right} ${styles.indicator} ${
          currentPage === totalAmountOfPages ? styles.inactive : ''
        }`}
        onClick={onNext}
      >
        {'>'}
      </li>
    </ul>
  );
}

export default Pagination;
