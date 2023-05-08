import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 100%;
    border: 2px solid gray;
    border-radius: 15px;
    padding: 10px;
    background-color: lightsteelblue;
`; 

export const Button = styled.button`
    font-size: 24px;
    font-weight: 700;
    font-family: Cambria;
    padding: 16px;
    margin-bottom: 16px;
    color: white;
    background-color: blue; 
    border-radius: 8px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: white;
        background-color: maroon;
        border-color: none;
    }
`;

export const LabelForm = styled.label`
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;
    color: black;
`; 

export const InputForm = styled.input`
    font-family: Cambria;
    font-weight: 400;
    font-size: 22px;
    outline: none;
    border: 2px solid gray;
    border-radius: 5px;
    padding: 8px;
    &:focus{
    border: 3px solid gray;
}
`; 

