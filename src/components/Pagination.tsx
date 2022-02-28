import {FC} from 'react';
import classNames from 'classnames';
import styles from '../styles/Pagination.module.css';

//components
import { Icons } from './Icons';


export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}
const Pagination: FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div className={`${styles.pagination} `}>
      <div className={`${styles.paginationWrapper} d-flex justify-center`}>
        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={classNames([styles.pageItem, styles.sides].join(' '))}
          >
            <Icons.ArrowLeftIcon />
          </button>
        )}
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: page === 1,
          })}
        >
          {1}
        </button>
        {page > 3 && <div className={styles.separator}>...</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className={styles.pageItem}
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={styles.pageItem}
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className={[styles.pageItem, styles.active].join(' ')}
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={styles.pageItem}
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className={styles.pageItem}
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className={styles.separator}>...</div>}
        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: page === totalPages,
          })}
        >
          {totalPages}
        </button>
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={[styles.pageItem, styles.sides].join(' ')}
          >
            <Icons.ArrowRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};
export  default  Pagination 