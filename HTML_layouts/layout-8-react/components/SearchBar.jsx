import { IoSearch } from "react-icons/io5"
import "../src/css/search-bar.css"

export default function SearchBar() {
    return (
        <form className="search-form">
            <input className="imput-field" type="text" placeholder="Search.." name="search" />
            <button className="search-btn" type="submit">
                <IoSearch />
            </button>
        </form>
    )
}
