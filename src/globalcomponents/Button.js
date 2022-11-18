import React from "react";
import styled from 'styled-components'


const ButtonComponent = styled.button`
    display : block;
    padding : 10px;
    width: 100%;
    text-align : center;
    vertical-align : middle;
    border-radius : 0.3rem;
    user-select : none;
    cursor : pointer;
    color : ${props => props.color === 'white' ? 'whitesmoke' :
              "#191919"
    };
    border : ${ props => 
        props.border === 'no' ? 'none' :
        props.border === 'gray' ? '1px solid gray' :
        '1px solid gray'
    };
    background-color : ${ props => 
        props.variant === 'white' ? 'whitesmoke' : 
        props.variant === 'dark' ? '#191919' : 'white'}`;

const Button = ({type, variant, className, onClick, border, color, children}) => {
    return (
        <ButtonComponent
            type={type}
            variant={variant}
            className={className}
            onClick={onClick}
            border={border}
            color={color}
        >{children}</ButtonComponent>
    )
}


export default Button