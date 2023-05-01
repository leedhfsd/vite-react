import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import searchIcon from "../assets/search.svg";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexBox = styled.div<{
  margin?: string;
  padding?: string;
}>`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  ${flexCenter};
`;

export const FlexWrapper = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
`;

export const GridWrapper = styled.div`
  display: grid;
`;

export const FlexContainer = styled.div<{
  direction?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
`;

export const baseLink = styled(Link)<{ color?: string }>`
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.color || "#000000"};
  display: block;
`;

export const Span = styled.span<{
  background?: string;
  margin?: string;
  padding?: string;
}>`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.background || "#ffffff"};
`;

export const Input = styled.input`
  outline: none;
  border: none;
`;

export const Navbar = styled.nav`
  margin: auto;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 5px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    padding: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
    padding: 15px;
    width: 980px;
  }
`;

export const NavSearch = styled(Input)`
  background-image: url("${searchIcon}");
  background-repeat: no-repeat;
  background-position: left top;
  padding-left: 40px;
  line-height: 1.2;
`;

export const NavInput = styled.input``;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const NavLink = styled(Link)<{ active: string }>`
  color: ${(props) => (props.active === "true" ? "#000000" : "#666666")};
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;

  border-bottom: ${(props) =>
    props.active === "true" ? "2px solid black" : ""};
  &:hover {
    border-bottom: 2px solid;
    color: #171717;
  }
`;

export const NavSpan = styled.span`
  padding: 0.5rem 1rem;
  color: #666666;
  font-weight: bold;
  &:hover {
    color: #000000;
    border-bottom: 2px solid;
  }
`;
