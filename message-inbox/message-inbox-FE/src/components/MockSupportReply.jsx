import { useState } from 'react';
import axios from 'axios';
import './MockSupportReply.css'; // Import the CSS file

const MockSupportReply = ({ messageId, refreshThread }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleMockReply = async () => {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found in localStorage');
            setLoading(false);
            return;
        }

        try {
            await axios.post('http://localhost:5000/mock-support-reply', {
                parentMessageId: messageId,
                content,
                senderType: 'support'
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setContent('');
            refreshThread(); // Refresh the thread after mock reply
        } catch (error) {
            console.log('Error sending mock support reply', error);
            setError('Error sending mock support reply');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mock-support-reply-container">
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={loading}
            />
            <button onClick={handleMockReply} disabled={loading}>
                {loading ? 'Sending...' : 'Send Mock Support Reply'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default MockSupportReply;
