import { useState } from "react"
import "./styling/app.css"
import ContactForm from "./components/ContactForm"
import Header from "./components/Header"
import ContactInformation from "./components/ContactInformation"

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handlerSubmit(e) {
        e.preventDefault()
        setIsSubmitted(prev => !prev)
    }

    return (
        <>
            <Header />
            <div className="page-container">
                <div className="left-side">
                    {!isSubmitted && <ContactForm handlerSubmit={handlerSubmit}/>}
                    {isSubmitted && <p>Thank you for information</p>}
                </div>
                <div className="right-side">
                    <ContactInformation />
                </div>
            </div>
        </>
    )
}

export default App
