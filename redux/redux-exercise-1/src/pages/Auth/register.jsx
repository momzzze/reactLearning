import { useDispatch } from "react-redux"
import { userActions } from "../../redux/slices/userSlice"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from "firebase/firestore"
import { useState } from "react";
import { auth } from "../../config/firebase";
import { storage } from '../../config/firebase';
import { db } from "../../config/firebase"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailChangeHandler = e => setEmail(e.target.value);
    const passwordChangeHandler = e => setPassword(e.target.value);
    const usernameChangeHandler = e => setUsername(e.target.value);

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const userCredentials =await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user
            const storageRef = ref(storage, `images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            if (user) {
                if (file) {
                    uploadTask.on('state_changed', (snapshot) => { }, (error) => {
                        console.error(error);
                    },
                        async () => {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            //update user
                            await updateProfile(user, {
                                displayName: username,
                                photoURL: downloadURL
                            })

                            //store userdata in firestore db
                            await setDoc(doc(db, 'users', user.uid), {
                                username,
                                email,
                                photoURL: downloadURL,
                                uid: user.uid
                            })
                            //dispatch user data to redux store
                            dispatch(userActions.addUser({
                                username,
                                email,
                                photoURL: downloadURL,
                                uid: user.uid
                            }))

                            navigate('/login');
                        })
                }
            }


        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form className="w-full max-w-sm" onSubmit={registerHandler}>
            <h2 className="text-2xl mb-4">Register</h2>
            {/* Add your registration form fields here */}
            <div className="mb-4">
                <label htmlFor="username" className="block mb-1">Username</label>
                <input type="text" id="username" onChange={usernameChangeHandler} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" onChange={emailChangeHandler} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-1">Password</label>
                <input type="password" id="password" onChange={passwordChangeHandler} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-4">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Register</button>
            <p className="mt-4 text-sm">
                Already have an account? <a href="/login" className="text-blue-500">Login here</a>.
            </p>
        </form>
    )
}

export default Register