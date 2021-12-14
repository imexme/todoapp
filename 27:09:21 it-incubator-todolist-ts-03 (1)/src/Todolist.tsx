import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus:(isDone:boolean,tID:string)=>void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    // const onChangeHandlerForChangeStatus=(isDone:boolean,tID:string)=>{
    //     props.changeStatus(isDone,tID)
    // }

    const onChangeHandlerForChangeStatus=(event:ChangeEvent<HTMLInputElement>,tID:string)=>{
        props.changeStatus(event.currentTarget.checked,tID)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    // const onChangeHandlerForChangeStatus=(event:ChangeEvent<HTMLInputElement>)=>{
                    //     props.changeStatus(event.currentTarget.checked,t.id)
                    // }
                    return <li key={t.id}>
                        {/*<input type="checkbox" checked={t.isDone} onChange={onChangeHandlerForChangeStatus}/>*/}

                        {/*<input type="checkbox" checked={t.isDone}*/}
                        {/*       onChange={(event:ChangeEvent<HTMLInputElement>)=>onChangeHandlerForChangeStatus(event.currentTarget.checked,t.id)}/>*/}

                        <input type="checkbox" checked={t.isDone}
                               onChange={(event)=>onChangeHandlerForChangeStatus(event,t.id)}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}