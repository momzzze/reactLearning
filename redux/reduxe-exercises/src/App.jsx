import { useSelector } from "react-redux";
import Counter from "./Counter"

function App() {  
  const { count } = useSelector((state) => state.count);
  return (
    <div className="p-4">
      <h1>Count: {count}</h1>
      <Counter />
      <Counter />
    </div>
  )
}

export default App
