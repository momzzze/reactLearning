import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import MessageInboxDetails from './MessageInboxDetails';
import MockSupportReply from './MockSupportReply';

const Inbox = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [replyContent, setReplyContent] = useState('');
    const [viewingThread, setViewingThread] = useState(false);
    const [inSelectionMode, setInSelectionMode] = useState(false);
    const [selectedMessages, setSelectedMessages] = useState(new Set());

    useEffect(() => {
        const fetchMessages = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found in localStorage');
                return;
            }
            try {
                const response = await axios.get('http://localhost:5000/received', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setMessages(response.data);
            } catch (error) {
                console.log('Error fetching messages', error);
            }
        };
        fetchMessages();
    }, []);

    const handleMessageClick = async (messageId) => {
        if (inSelectionMode) {
            // Toggle selection in selection mode
            setSelectedMessages(prev => {
                const newSelected = new Set(prev);
                if (newSelected.has(messageId)) {
                    newSelected.delete(messageId);
                } else {
                    newSelected.add(messageId);
                }
                return newSelected;
            });
        } else {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found in localStorage');
                return;
            }
            try {
                const response = await axios.get(`http://localhost:5000/message/${messageId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setSelectedMessage(response.data);
                setViewingThread(true);
            } catch (error) {
                console.log('Error fetching message thread', error);
            }
        }
    };

    const handleCheckboxChange = (messageId) => {
        setSelectedMessages(prev => {
            const newSelected = new Set(prev);
            if (newSelected.has(messageId)) {
                newSelected.delete(messageId);
            } else {
                newSelected.add(messageId);
            }
            return newSelected;
        });
    };

    const handleReplySubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found in localStorage');
                return;
            }
            await axios.post('http://localhost:5000/reply', {
                parentMessageId: selectedMessage.id,
                content: replyContent,
                senderType: 'user'
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setReplyContent('');
            handleMessageClick(selectedMessage.id); // Refresh the thread
        } catch (error) {
            console.log('Error sending reply', error);
        }
    };

    const handleDeleteSelected = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found in localStorage');
                return;
            }
            const messageIds = Array.from(selectedMessages);
            await axios.request({
                url: `http://localhost:5000/messages/`,
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
                data: { ids: messageIds }
            });

            // Remove deleted messages from state
            setMessages(messages.filter(msg => !selectedMessages.has(msg.id)));
            setSelectedMessages(new Set());
            setInSelectionMode(false);
        } catch (error) {
            console.log('Error deleting messages', error);
        }
    };

    const formatDate = (date) => {
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            console.error('Invalid date:', date);
            return 'Invalid Date';
        }
        return format(parsedDate, 'MMM dd, yyyy h:mm a');
    };

    return (
        <div>
            <div className="header">
                <h2>Inbox</h2>
                <button className='deleteButton' onClick={() => setInSelectionMode(!inSelectionMode)}>
                    {inSelectionMode ? 'Cancel' : 'Delete'}
                </button>
            </div>
            {inSelectionMode && selectedMessages.size > 0 && (
                <button onClick={handleDeleteSelected} className="confirm-delete">
                    Confirm Delete
                </button>
            )}
            {viewingThread ? (
                <>
                    <MessageInboxDetails
                        message={selectedMessage}
                        onReplySubmit={handleReplySubmit}
                        onBack={() => setViewingThread(false)}
                        replyContent={replyContent}
                        setReplyContent={setReplyContent}
                    />
                    <MockSupportReply messageId={selectedMessage.id} refreshThread={() => handleMessageClick(selectedMessage.id)} />
                </>
            ) : (
                messages.map(message => (
                    <div
                        key={message.id}
                        className={`message-container ${inSelectionMode && selectedMessages.has(message.id) ? 'selected' : ''}`}
                        onClick={() => handleMessageClick(message.id)}
                    >
                        {inSelectionMode && (
                            <input
                                type="checkbox"
                                checked={selectedMessages.has(message.id)}
                                onChange={() => handleCheckboxChange(message.id)}
                                className="message-checkbox"
                            />
                        )}
                        <div>
                            <h2 className="message-title">{message.title}</h2>
                            <p className="message-date">{formatDate(message?.createdAt)}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Inbox;
