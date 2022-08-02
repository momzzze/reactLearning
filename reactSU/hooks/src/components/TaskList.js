import TaskItem from "./TaskItem"
import { TaskContext } from "../contexts/TaskContext"
import { useContext } from "react"

export const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <ul >
            {tasks.map(t => <TaskItem key={t._id} task={t} />)}
        </ul>
    )
}