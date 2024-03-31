import { useDispatch } from "react-redux";
import { decrement, increment, incrementAsync } from "./state/countSlice/countSlice";

const Counter = () => {
    const dispatch = useDispatch();
    return (
        <>
            
            <div className="space-x-2">
                <button onClick={() => dispatch(increment(5))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Increment</button>
                <button onClick={() => dispatch(incrementAsync(10))} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Increment Async</button>
                <button onClick={() => dispatch(decrement())} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
            </div>
        </>
    )
}

export default Counter