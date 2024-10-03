import { ChangeEvent, FC } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

const Search: FC<SearchProps> = ({ handleChange, placeholder = "Search...", value }) => {
  return (
    <div className="flex justify-between mt-8 border h-12 rounded-md pl-2">
      <div className="flex gap-2 items-center w-full">
        <label htmlFor="search">
          <IoSearch className="text-color757575" />
        </label>
        <input
          autoFocus
          id="search"
          className="w-full h-full outline-none placeholder:text-[14px]"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};
export default Search;
