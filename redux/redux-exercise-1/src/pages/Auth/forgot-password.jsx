
const ForgotPassword = () => {
    return (
        <form className="w-full max-w-sm">
            <h2 className="text-2xl mb-4">Forgot Password</h2>
            {/* Add your forgot password form fields here */}
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Reset Password</button>
            <p className="mt-4 text-sm">
                Remembered your password? <a href="/login" className="text-blue-500">Login here</a>.
            </p>
        </form>
    )
}

export default ForgotPassword