import { FaRegUserCircle } from "react-icons/fa"
import "../src/css/message.css"

export default function Message({ message, time, msgType }) {
    return (
        <div className={`${msgType}-chats`}>
            <FaRegUserCircle color="gray" size={22} className={`${msgType}-chats-img`}/>
            <div className={`${msgType}-msg`}>
                <div className={`${msgType}-msg-box`}>
                    <p>
                        {message}
                    </p>
                    <span className="time">{time}</span>
                </div>
            </div>
        </div>
    )
}
