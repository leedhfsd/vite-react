import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  background-color: ${(props) => props.background || "white"};
`;

const StyledNavLink = styled(Link)<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#171717" : "#666666")};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid;
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <StyledNavContainer>
        <StyledNavLink to="/" active={pathname === "/"}>
          홈
        </StyledNavLink>
        <StyledNavLink to="/toon" active={pathname === "/toon"}>
          웹툰
        </StyledNavLink>
        <StyledNavLink to="/novel" active={pathname === "/novel"}>
          웹소설
        </StyledNavLink>
      </StyledNavContainer>
    </header>
  );
}
