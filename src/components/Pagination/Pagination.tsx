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

  return (
    <ul className={styles.paginationBar}>
      {/* Left navigation arrow */}
      <li className={styles.left} onClick={onPrevious}>
        {}
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            // eslint-disable-next-line react/jsx-key
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            // eslint-disable-next-line react/jsx-key
            <li className={styles.p} onClick={() => onPageChange(Number(pageNumber))}>
              {pageNumber}
            </li>
          );
        })}
      {/*  Right Navigation arrow */}
      <li className={styles.right} onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
}

export default Pagination;
