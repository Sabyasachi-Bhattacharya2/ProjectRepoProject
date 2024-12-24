import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";


export default function NewProject({onAdd, onCancelProject}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const dialog = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === ''
            || enteredDescription.trim() === ''
            || enteredDueDate.trim() === ''
        ) {
            dialog.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })

    }


    return (
        <>
        <Modal ref={dialog} buttonCaption={'Close'}>
            <h2 className='text-xl font-bold text-stone-900 my-4'>Error</h2>
            <p className='text-stone-700 mb-4'>Details not entered</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className="flex items-center justify-center gap-4 my-4">
                <li>
                    <button className='text-stone-600 hover:text-stone-950' onClick={onCancelProject}>Cancel</button>
                </li>
                <li>
                    <button
                        className='rounded-2xl px-6 py-2 text-stone-200 hover:text-stone-50 bg-stone-600 hover:bg-stone-950'
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={title} label='Title'/>
                <Input ref={description} label='Description' textarea/>
                <Input type='date' ref={dueDate} label='Due Date'/>
            </div>
        </div>
        </>
    )
}