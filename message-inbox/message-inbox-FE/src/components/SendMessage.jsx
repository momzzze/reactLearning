import { useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

const SendMessage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                console.log('No token found in localStorage');
                return;
            }
            await axios.post("http://localhost:5000/send", {
                receiverId: null,
                title,
                content,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTitle("");
            setContent("");
            navigate('/inbox');
        } catch (error) {
            console.log("Error sending message");
        }
    };

    return (
        <form className="send-message-form" onSubmit={handleSubmit}>
            <h2>Send a Message to Support</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Message:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Type your message here"
                    required
                ></textarea>
            </div>
            <button className="btn btn-form" type="submit">Send</button>
        </form>
    );
};

export default SendMessage;
