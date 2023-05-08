import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 22px;;
  &.active {
    color: white;
    background-color: maroon;
  }
`;