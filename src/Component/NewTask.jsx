import {useState} from "react";

export default function NewTask({onAdd}) {

    const [tasks, setTasks] = useState('');

    function handleChange(event) {
        setTasks(event.target.value);
    }

    function handleClick() {
        if(tasks.length === 0) {
            return;
        }
        onAdd(tasks);
        setTasks('');
    }

    return (
        <div className='flex items-center gap-4'>
            <input
                onChange={handleChange}
                type='text'
                className='bg-stone-200 w-64 px-2 py-1 rounded-sm'
                value={tasks}
            />
            <button onClick={handleClick} className='bg-stone-700 hover:bg-stone-950'>Add Task</button>
        </div>
    )
}