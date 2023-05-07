import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="container">
        <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
          <Link
            className="flexCenter animate pointer"
            to="home"
            smooth={true}
            offset={-80}
          >
            <LogoImg />
          </Link>
          <StyleP className="font13">
            © {getCurrentYear()} -{" "}
            <span className="purpleColor font13"><a href="/">Ecodata</a></span> - All Rights
            Reserved
          </StyleP>

          <Link
            className="animate pointer font13"
            to="home"
            smooth={true}
            offset={-80}
          >
            Back to top
          </Link>
        </InnerWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
