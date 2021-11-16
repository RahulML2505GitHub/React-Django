import React from 'react'

export default function ColorPalet(props) {
    return (
        (props.mode === 'dark') && <button className="mx-2 my-2" style={{
            height: '25px',
            width: '25px',
            backgroundColor: props.theme.bg,
            borderRadius: '50%',
            display: 'inline - block'
        }} onClick={() => { props.setTheme(props.theme) }}></button>
    )
}

