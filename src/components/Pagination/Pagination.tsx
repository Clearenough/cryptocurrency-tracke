import classNames from 'classnames';

import { DOTS, usePagination } from '../../hooks/usePagination';

import styles from './Pagination.module.scss';

interface IPaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: IPaginationProps) {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  if (paginationRange) {
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

  const controlLeftBtnActiveClass = classNames([
    styles.left,
    styles.indicator,
    { [styles.inactive]: currentPage === 1 },
  ]);
  const dotsClass = classNames([styles.dotsIndicator, styles.indicator]);
  const controlRightBtnActiveClass = classNames([
    styles.right,
    styles.indicator,
    { [styles.inactive]: currentPage === totalAmountOfPages },
  ]);

  return (
    <ul className={styles.paginationBar}>
      <li className={controlLeftBtnActiveClass} onClick={onPrevious}>
        {'<'}
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className={dotsClass} key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classNames([
                styles.pageIndicator,
                styles.indicator,
                { [styles.inactive]: pageNumber === currentPage },
              ])}
              onClick={() => onPageChange(Number(pageNumber))}
              key={index}
            >
              {pageNumber}
            </li>
          );
        })}

      <li className={controlRightBtnActiveClass} onClick={onNext}>
        {'>'}
      </li>
    </ul>
  );
}

export default Pagination;
