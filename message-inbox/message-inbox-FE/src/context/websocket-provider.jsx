import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./UserContext";
import io from "socket.io-client"; // Import the 'io' module


const SocketContext = createContext(null);
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { user } = useAuth();
    const token = localStorage.getItem('token');

    useEffect(() => {
        let socketInstance = null;

        console.log('User:', user);
        console.log('Token:', token);

        if (user && user.id) {
            socketInstance = io('http://localhost:8001', {
                auth: {
                    token,
                },
            });

            setSocket(socketInstance);

            console.log('Socket connected:', socketInstance);

            return () => {
                if (socketInstance) {
                    socketInstance.close();
                    console.log('Socket disconnected');
                }
            };
        } else {
            return () => {
                if (socketInstance) {
                    socketInstance.close();
                    console.log('Socket disconnected');
                }
            };
        }
    }, [user, token]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
export const useSocketContext = () => useContext(SocketContext);