import ChatBox from "../components/ChatBox"
import SideBanners from "../components/SideBanners"
import SearchBar from "../components/SearchBar"
import './css/app.css'

function App() {
    return (
        <div className="web-page">
            <div className="left-side-container">
                <header>
                    <h1>Layout 8</h1>
                </header>
                <ChatBox />
            </div>
            <div className="right-side-container">
                <SearchBar />
                <SideBanners />
            </div>
        </div>
    )
}

export default App
