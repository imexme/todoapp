import React from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";


let [title, setTitle] = useState('')


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    addTask: (title: string) =>void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
   const changeFilterHandlerActive()=>
    return <div>
        <h3>{props.title}</h3>
      <Input callBack={props.addTask}/>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                   <Button callBack={() => {props.removeTask(t.id)}} value={'x'}/>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <Button callBack={()=>props.changeFilter('all')} value={'All'}/>
            <Button callBack={()=>props.changeFilter('active')} value={'Active'}/>
            <Button callBack={()=>props.changeFilter('completed')}value={'Completed'} />

            {/*<button onClick={ () => { props.changeFilter("all") } }>*/}
            {/*    All*/}
            {/*</button>*/}
            {/*<button onClick={ () => { props.changeFilter("active") } }>*/}
            {/*    Active*/}
            {/*</button>*/}
            {/*<button onClick={ () => { props.changeFilter("completed") } }>*/}
            {/*    Completed*/}
            {/*</button>*/}
        </div>
    </div>
}
