import { FaRegUserCircle } from "react-icons/fa"
import { chatDataBase } from "../src/assets/chatDataBase"
import Message from "./Message"
import MessageBottom from "./MessageBottom"
import { useState, useEffect, useRef } from "react"
import "../src/css/chat-box.css"

export default function ChatBox() {
    const [chatList, setChatList] = useState(chatDataBase)
    const chat = useRef(null)
    useEffect(() => {
        chat.current.scrollTop = chat.current.scrollHeight;
    }, [chatList])

    function addNewMsg(msg) {
        setChatList((prev) => [...prev, msg])
    }

    return (
        <div className="chat-box-container">
            <div className="chat-box-header">
                <FaRegUserCircle color="gray" size={22}/>
                <div className="active">
                    <p>User name</p>
                </div>
            </div>

            <div className="chat-page">
                <div className="msg-inbox">
                    <div className="chats">
                        <div ref={chat}  className="msg-page" >
                            {chatList.map((msg, index) => {
                                return <Message key={index} {...msg} />
                            })}
                        </div>
                    </div>

                    <MessageBottom addNewMsg={addNewMsg} />
                </div>
            </div>
        </div>
    )
}
