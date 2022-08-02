import React, { useEffect, useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { taskDeleteHandler, toggleTask, taskEditHandler } = useContext(TaskContext)

    console.log(taskDeleteHandler);
    useEffect(() => {
        console.log('Mount');
        return () => {
            console.log('Unmount');
        }
    }, [])

    const TaskEditClickHandler = () => {
        setIsEdit(true);
    }
    const onEdit = (e) => {
        e.preventDefault();
        const { title } = Object.fromEntries(new FormData(e.target));
        taskEditHandler(task, title);
        setIsEdit(false);
    }
    const className = [
        task.isCompleted ? styles.completed : '',
        styles['task-item']
    ]


    return (
        <li>
            {isEdit
                ? <form onSubmit={onEdit}>
                    <input type="text" name='title' defaultValue={task.title} />
                    <input type="submit" value='edit' />
                </form>
                : (
                    <>
                        <span
                            className={className.join(' ')}
                            onClick={() => toggleTask(task)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => taskDeleteHandler(task._id)}>X</button>
                        <button onClick={() => TaskEditClickHandler(task._id)}>edit</button>
                    </>
                )

            }
        </li>
    )
}

export default TaskItem