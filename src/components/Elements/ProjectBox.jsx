import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer">
        <img src={img} alt="project" />
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  img {
    width: 260px;
    height: 360px;
    margin: 20px 0;
    object-fit: cover;
    border-radius: 20px;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  /* :hover > img {
    opacity: 0.5;
  } */
`;