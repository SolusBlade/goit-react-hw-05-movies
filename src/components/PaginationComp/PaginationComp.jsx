import Pagination from "react-js-pagination";
import s from './PaginationComp.module.css';

const PaginationComp = ({ page, handlePageChange, totalItems }) => {
  return (
    <Pagination
      activePage={page}
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

export default PaginationComp;
