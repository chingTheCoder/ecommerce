import React from "react"
const InputField = ({placeholder, type}) => {
    return (
        <div style={{ margin : '5px'}}>
            <input
            style={{
                width: '100%',
                border : 'none',
                boxSizing : 'border-box',
                paddingBottom : '10px',
                border: 'none',
                backgroundColor : '#191919',
                borderBottom : '1px solid gray'
            }}
            type={type}
            placeholder={placeholder}
            >
            </input>
        </div>
       
    )
}

export default InputField