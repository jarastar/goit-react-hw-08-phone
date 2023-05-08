import styled from "styled-components";

export const LabelFilter = styled.label`
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;

    margin-right: 10px;
`; 

export const InputFilter = styled.input`
padding: 8px;
    font-family: Cambria;
    font-weight: 400;
    font-size: 24px;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    &:focus {
    border: 2px solid blue;
}
`; 
