import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";



const AddProducts = () => {
    const [enterTitle, setEnterTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [enterProductImg, setEnterProductImg] = useState(null);
    const navigate = useNavigate();
    const addHandler = async (e) => {
        e.preventDefault();

        try {
            const docRef = await collection(db, 'products');
            const storageRef = ref(storage, `productImages/${Date.now() + enterTitle}`);
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

            uploadTask.on('state_changed', (snapshot) => { }, (error) => {
                console.error(error);
            },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    await addDoc(docRef,{
                        title: enterTitle,
                        shortDescription: shortDescription,
                        description: description,
                        category: category,
                        price: price,
                        productImg: downloadURL                    
                    })    


                    navigate('/dashboard');
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="w-[50%]">
            <div className="flex items-center">
                <div className="min-h-screen w-full justify-center mt-[70px]">
                    <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
                    <form className="space-y-4" onSubmit={addHandler}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-2 text-red-700">Product Title</label>
                            <input
                                id="name"
                                type="text"
                                onChange={(e) => setEnterTitle(e.target.value)}
                                placeholder="Enter product title"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="productDescription" className="block text-sm font-bold mb-2 text-red-700">Short Description</label>
                            <textarea
                                id="shortDescription"
                                onChange={(e) => setShortDescription(e.target.value)}
                                placeholder="Enter short description"
                                className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="productDescription" className="block text-sm font-bold mb-2 text-red-700">Short Description</label>
                            <textarea
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                                className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
                            ></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-7">
                            <div className="flex-1">
                                <label htmlFor="price" className="block text-sm font-bold mb-2 text-red-700">Product Price</label>
                                <input
                                    id="price"
                                    type="number"
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Enter product price"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="productDescription" className="block text-sm font-bold mb-2 text-red-700">Category</label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="chair">Chair</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="productPrice" className="block text-sm font-bold mb-2 text-red-700">Product Picture</label>
                            <input
                                id="productPicture"
                                type="file"
                                onChange={(e) => setEnterProductImg(e.target.files[0])}
                                placeholder="Choose product picture"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-slate-400 w-full hover:bg-slate-600 text-white py-2 px-4 rounded mt-4"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddProducts