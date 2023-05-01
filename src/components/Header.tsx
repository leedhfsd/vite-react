import { Link, useLocation } from "react-router-dom";
import * as Styled from "../style/style";
import logo from "../assets/logo1.png";

export default function Header() {
  const { pathname } = useLocation();
  const check = (path: string) => {
    return String(path === pathname);
  };

  return (
    <header>
      <Styled.Navbar>
        <Styled.FlexWrapper direction="column">
          <Styled.FlexContainer style={{ justifyContent: "space-between" }}>
            <Styled.FlexBox>
              <Link to="/">
                <img src={logo} height="64" />
              </Link>
            </Styled.FlexBox>
            <Styled.FlexBox>
              <Styled.NavSearch style={{ width: "450px", lineHeight: "2" }} />
            </Styled.FlexBox>
            <Styled.FlexBox>
              <Styled.baseLink
                style={{ margin: "0 1rem", fontSize: "14px" }}
                to="/login"
              >
                <Styled.Span>로그인</Styled.Span>
              </Styled.baseLink>
              <Styled.baseLink color="#ffffff" to="/register">
                <Styled.Span
                  margin="0 8px"
                  padding="0.5rem 1rem"
                  background="#000000"
                  style={{ borderRadius: "32px", fontSize: "14px" }}
                >
                  구독하기
                </Styled.Span>
              </Styled.baseLink>
            </Styled.FlexBox>
          </Styled.FlexContainer>
          <Styled.NavList style={{ color: "red" }}>
            <Styled.NavLink to="/" active={check("/")}>
              홈
            </Styled.NavLink>
            <Styled.NavLink to="/toon" active={check("/toon")}>
              웹툰
            </Styled.NavLink>
            <Styled.NavLink to="/novel" active={check("/novel")}>
              웹소설
            </Styled.NavLink>
            <Styled.NavSpan>장르</Styled.NavSpan>
          </Styled.NavList>
        </Styled.FlexWrapper>
      </Styled.Navbar>
    </header>
  );
}
