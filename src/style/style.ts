import styled from "styled-components";

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;

  background-color: ${(props) => props.backgroundColor || "#ffffff"};
`;
