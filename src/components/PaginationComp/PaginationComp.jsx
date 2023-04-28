import Pagination from "react-js-pagination";
import s from './PaginationComp.module.css';
import { memo } from "react";

const PaginationComp = ({ page=1, handlePageChange, totalItems }) => {
  return (
    <Pagination
      activePage={Number(page) === 0 ? 1 : Number(page)}
      itemsCountPerPage={20}
      totalItemsCount={totalItems}
      pageRangeDisplayed={10}
      onChange={handlePageChange}
      itemClass={s.item}
      linkClass={s.link}
      activeLinkClass={s.activeLink}
      innerClass={s.pagination}
      disabledClass={s.disabled}
    />
  );
};

export default memo(PaginationComp);
