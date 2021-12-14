// import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
//
// type InputType={
//     callBack:(newTitle:string)=>void
// }
// const Input = (props:InputType) => {
//     let[title, setTitle] = useState('frrfgr')
//     const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
//       setTitle(event.currentTarget.value)
//     }
//
//     const onClickHandler=()=>{
//         props.callBack(title)
//         setTitle('')
//     }
//
//     const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'enter') {
//             onClickHandler()
//         }
// }
//     return (
//         <div>
//         <input value={title}
//             onChange={onChangeHandler}
//              onKeyPress= {onKeyPressHandler}
//         />
//
//             <button onClick={onClickHandler}>++</button>
//         </div>
//     )
// }
//
// export default Input