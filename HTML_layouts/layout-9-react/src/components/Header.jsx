import SearchBar from "./SearchBar"
import { AiOutlineChrome } from "react-icons/ai"
import "../styling/header.css"

export default function Header() {
    return (
        <header>
            <AiOutlineChrome size={40}/>
            <SearchBar />
        </header>
    )
}