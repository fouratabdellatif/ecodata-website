import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import Dashboard from "../../assets/img/dashboard1.png";
import { Link } from "react-scroll";

export default function Solution() {
  return (
    <Wrapper id="solution">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "20px 0" }}>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about</h4>
                <h2 className="font40 extraBold">Our Brand New Solution</h2>
                <p className="font12">
                  From data collection to visualization, our dashboard solution
                  has you covered. Empower your team with our data analysis
                  dashboard solution.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <Link
                      activeClass="active"
                      style={{ padding: "10px 15px" }}
                      to="pricing"
                      spy={true}
                      smooth={true}
                      offset={-80}
                    >
                      <FullButton
                        title="Check our pricing"
                      />
                    </Link>
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <Link
                      activeClass="active"
                      style={{ padding: "10px 15px" }}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-80}
                    >
                      <FullButton title="Contact Us" border />
                    </Link>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img style={{
                        objectFit: 'contain',
                      }} src={Dashboard} alt="dashboard" />
                    </AddImgWrapp1>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  /* top: -70px; */
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 600px;
`;
const AddImgWrapp1 = styled.div`
  width: 100%;
  margin: 0 6% 10px 6%;
  img {
    width: 600px;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
