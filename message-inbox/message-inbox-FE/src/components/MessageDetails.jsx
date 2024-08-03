
import { format } from 'date-fns';
import './style.css';

const MessageDetail = ({ title, createdAt, content, onBack }) => {

    return (
        <div className="message-detail-container">
            <button onClick={onBack} className="back-button">Back</button>
            <h2 className="message-detail-title">{title}</h2>
            <p className="message-detail-date">{format(new Date(createdAt), 'MMM dd, yyyy h:mm a')}</p>
            <p className="message-detail-content">{content}</p>
        </div>
    );
};

export default MessageDetail;