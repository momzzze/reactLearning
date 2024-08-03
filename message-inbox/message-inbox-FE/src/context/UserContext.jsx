import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"
export const UserContext = createContext();

export const UserProvider = ({
    // eslint-disable-next-line react/prop-types
    children
}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5000/user', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                } catch (error) {
                    console.log('Error fetching user data');
                }
            }
        }
        fetchUserData();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const userResponse = await axios.get('http://localhost:5000/user');

            setUser(userResponse.data);
        } catch (error) {
            console.log('Error logging in');
        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = '';
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(UserContext)
}