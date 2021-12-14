import React from 'react'

type propsType = {
    callBack: () => void
    name: string
}

export const Button = ({ name, callBack, ...props }: propsType) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}> {name} </button>
    )
}
