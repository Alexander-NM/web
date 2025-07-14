import { useRef } from "react"
import "../src/css/message-bottom.css"

export default function MessageBottom({ addNewMsg }) {
    const inputField = useRef(null)
    function hendlerClick() {
        if (!inputField.current.value) {
            return
        }
        const date = new Date()
        addNewMsg({
            message: inputField.current.value,
            time: date.toLocaleString(),
            msgType: "outgoing",
        })
        inputField.current.value = ""
    }

    return (
        <div className="msg-bottom">
            <div className="input-group">
                <input
                    ref={inputField}
                    type="text"
                    className="form-control"
                    placeholder="Write message..."
                />

                <span
                    className="input-group-text send-icon"
                    onClick={hendlerClick}
                >
                    <i className="bi bi-send"></i>
                </span>
            </div>
        </div>
    )
}
