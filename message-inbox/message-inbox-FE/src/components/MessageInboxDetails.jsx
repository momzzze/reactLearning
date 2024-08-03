import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './style.css'; // Ensure you have the correct path for your CSS file

const MessageInboxDetails = ({ message, onReplySubmit, onBack, replyContent, setReplyContent }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);

    const formatDate = (date) => {
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            console.error('Invalid date:', date);
            return 'Invalid Date';
        }
        return format(parsedDate, 'MMM dd, yyyy h:mm a');
    };

    // Function to sort messages by creation date
    const sortRepliesByDate = (replies) => {
        return replies.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    };

    // Recursive function to render replies and their replies
    const renderReplies = (replies) => {
        return sortRepliesByDate(replies).map(reply => (
            <div key={reply.id} className={`message-reply ${reply.senderType}`}>
                <h3 className="reply-title">{reply.title}</h3>
                <p className="reply-date">{formatDate(reply.createdAt)}</p>
                <p className="reply-content">{reply.content}</p>
                {/* Recursively render nested replies */}
                {reply.replies && reply.replies.length > 0 && (
                    <div className="message-replies">
                        {renderReplies(reply.replies)}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className="message-detail-container">
            <div className="message-detail-header">
                <button onClick={onBack} className="back-button">Back</button>
                <button onClick={() => setShowReplyForm(prev => !prev)} className="reply-button">
                    {showReplyForm ? 'Cancel' : 'Reply'}
                </button>
            </div>
            {showReplyForm && (
                <div className="reply-form">
                    <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Type your reply..."
                        className="reply-textarea"
                    />
                    <button onClick={onReplySubmit} className="send-reply-button">Send Reply</button>
                </div>
            )}
            {message && (
                <>
                    <h2 className="message-detail-title">{message.title}</h2>
                    <p className="message-detail-date">{formatDate(message.createdAt)}</p>
                    <p className="message-detail-content">{message.content}</p>
                    <div className="message-replies">
                        {/* Render the initial message's replies */}
                        {message.replies && message.replies.length > 0 && renderReplies(message.replies)}
                    </div>
                </>
            )}
        </div>
    );
};

export default MessageInboxDetails;
