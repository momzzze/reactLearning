import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/UserContext';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import MessageDetails from './MessageDetails';

const SentMessages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [viewingDetail, setViewingDetail] = useState(false);
    const [inSelectionMode, setInSelectionMode] = useState(false);
    const [selectedMessages, setSelectedMessages] = useState([]);
    const navigate = useNavigate();
    const user = useAuth();
    const formatDate = (date) => format(new Date(date), 'MMM dd, yyyy h:mm a');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.log('No token found in localStorage');
                    return;
                }
                const response = await axios.get(`http://localhost:5000/sent/`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMessages(response.data);
            } catch (error) {
                alert('Error fetching messages');
            }
        };
        fetchMessages();
    }, [user]);
    const handleMessageClick = (message) => {
        if (!inSelectionMode) {
            setSelectedMessage(message);
            setViewingDetail(true);
        } else {
            toggleMessageSelection(message);
        }
    };
    const toggleMessageSelection = (message) => {
        setSelectedMessages(prevSelectedMessages => {
            if (prevSelectedMessages.includes(message.id)) {
                return prevSelectedMessages.filter(id => id !== message.id);
            } else {
                return [...prevSelectedMessages, message.id];
            }
        });
    };
    const handleDeleteClick = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token || selectedMessages.length === 0) {
                console.log('No token found or no messages selected');
                return;
            }
            await axios.request({
                url: `http://localhost:5000/messages/`,
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
                data: { ids: selectedMessages }
            });
            setMessages(prevMessages => prevMessages.filter(message => !selectedMessages.includes(message.id)));
            setSelectedMessages([]);
            setInSelectionMode(false);
        } catch (error) {
            alert('Error deleting messages');
        }
    };

    const handleBackClick = () => {
        setViewingDetail(false);
        setSelectedMessage(null);
        navigate('/sent');
    };

    if (viewingDetail && selectedMessage) {
        return (
            <MessageDetails
                title={selectedMessage.title}
                content={selectedMessage.content}
                createdAt={formatDate(selectedMessage.createdAt)}
                onBack={handleBackClick}
            />
        );
    }
    return (
        <div>
            <h2>Sent Messages</h2>
            <button className='deleteButton' onClick={() => setInSelectionMode(!inSelectionMode)}>
                {inSelectionMode ? 'Cancel' : 'Delete'}
            </button>
            {inSelectionMode && (
                <button onClick={handleDeleteClick} disabled={selectedMessages.length === 0}>
                    Confirm Deletion
                </button>
            )}
            {messages.map(message => (
                <div key={message.id} className="message-container" onClick={() => handleMessageClick(message)}>
                    <div>
                        <h2 className="message-title">{message.title}</h2>
                        <p className="message-date">{formatDate(message.createdAt)}</p>
                    </div>
                    {inSelectionMode && (
                        <input
                            type="checkbox"
                            checked={selectedMessages.includes(message.id)}
                            onChange={() => toggleMessageSelection(message)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SentMessages;