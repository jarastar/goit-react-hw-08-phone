import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`; 

export const Item = styled.li`
    font-family: Cambria;
    font-weight: 500;
    font-size: 24px;

    display: flex;
    justify-content:space-between;
`; 

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid gray;

    padding: 5px;

    text-align: center;
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;
    background-color: blue;
    color: white;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


    &:active, 
    &:hover,
    &:focus {
        background-color: maroon;
        color: white;
        border-color: none;
}`; 

