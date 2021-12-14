import React from 'react';
import { FilterValuesType } from './App';
import { Button } from './Components/Button'
type TaskType = {
    id: number
    title: string
    isDone: boolean
    name: string
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist({ title, tasks, removeTask, ...props }: PropsType) {


    const callBackHandlerForSetFilters = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    return <div>
        <h3>{title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => { removeTask(t.id) }}>x</button>
                </li>)
            }
        </ul>
        <div>
            <Button callBack={() => callBackHandlerForSetFilters("all")} name={'All'} />
            <Button callBack={() => callBackHandlerForSetFilters("all")} name={'Completed'} />
            <Button callBack={() => callBackHandlerForSetFilters("all")} name={'Active'} />



        </div>
    </div>
}
