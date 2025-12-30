import { IoSearch } from "react-icons/io5";

const SearchBar = () => {


  return (
    <form className="rounded-full text-xl items-center flex">
        <IoSearch className="ml-2 absolute text-gray-300 focus: text-gray-600"/>
        <input type="text" placeholder=" O que você procura?"
        className="ml-1 px-6 py-2 placeholder-gray-300 rounded-full border-hidden ring-2 ring-gray-300 focus:ring-gray-500"
        ></input>
        {/* <button type=""></button> */}
    </form>
  )
}

export default SearchBar
