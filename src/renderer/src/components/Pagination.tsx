import { Dispatch, SetStateAction } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  let isPrevDisabled;
  let isNextDisabled;

  if (totalPages === 0) {
    isPrevDisabled = true;
    isNextDisabled = true;
  } else {
    isPrevDisabled = page === 1;
    isNextDisabled = page === totalPages;
  }

  return (
    <div className="absolute bottom-0 w-full xs:mt-0 mt-4 flex flex-col justify-center items-center">
      <p className="text-xs mb-1 text-gray-600">Página {totalPages === 0 ? 0 : page} de {totalPages}</p>
      <div className="flex gap-2 ">
        <button
          onClick={() => setPage(page - 1)}
          disabled={isPrevDisabled}
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-primary-950 bg-primary-500 rounded-s
          ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          <IoIosArrowBack className="w-4" />
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={isNextDisabled}
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-primary-950 bg-primary-500 rounded-e
          ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          <IoIosArrowForward className="w-4" />
        </button>
      </div>
    </div>
  );
};
export default Pagination;
