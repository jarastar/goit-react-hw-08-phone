import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;


export const UserMenuTitle = styled.p`
margin: 0 16px;
font-size: 18px;
font-weight: bold;
padding: 10px 0;
color: brown;
`;

export const Button = styled.button`
    font-size: 16px;
    font-weight: 700;
    font-family: Segoe UI;
    padding: 8px 16px;
    color: blue;
    background-color: white; 
    border: 1px solid;
    border-radius: 12px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: white;
        background-color: maroon;
        border-color: none;
    }
`;