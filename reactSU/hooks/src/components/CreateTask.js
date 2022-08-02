import React, { useState } from 'react'



const CreateTask = ({ taskCreateHandler }) => {
    const [task, setTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        taskCreateHandler(task);
        setTask('');
    }

    const onChange = (e) => {
        setTask(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input id='task-name' onChange={onChange} type="text" name='taskName' value={task} placeholder='Do the dishes' />
            <input type="submit" value="Add" />
        </form>
    )
}

export default CreateTask