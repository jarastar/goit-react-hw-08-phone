import styled from "styled-components";


export const Form = styled.form`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
  padding: 10px;
  width: 320px;

`;

export const SignUp = styled.h1`
  font-size:48px;
  font-weight: bold;
  font-family: Segoe UI;
  color: maroon;
  text-align: center;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-size:16px;
  font-weight: bold;
  font-family: Segoe UI;
  color: maroon;
`;

export const Input = styled.input`
    padding: 16px;
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.2;
    border: 1px solid grey;
    border-radius: 8px;
    width: 350px;
    cursor: pointer;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
      border: 2px solid blue;
      outline: none;
    }
`;

export const Button = styled.button`
    font-size: 16px;
    font-weight: 700;
    font-family: Segoe UI;
    padding: 16px;
    margin-bottom: 16px;
    color: maroon;
    background-color: white; 
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: white;
        background-color: maroon;
        border-color: none;
    }
`;