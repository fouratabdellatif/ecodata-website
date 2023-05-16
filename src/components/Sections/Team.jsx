import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import TeamImg1 from "../../assets/img/team/fourat.jpg";
import TeamImg2 from "../../assets/img/team/wassim03.jpg";
import TeamImg3 from "../../assets/img/team/arij.jpg";
import TeamImg4 from "../../assets/img/team/wadie.jpg";

export default function Team() {
  return (
    <Wrapper id="team">
      <div className="whiteBg" style={{ padding: "20px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Team</h1>
            <p className="font13">
            Meet the experts behind our data analysis solutions.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                img={TeamImg1}
                title="Fourat Abdellatif"
              />
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                img={TeamImg2}
                title="Wassim Hassanette"
              />
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                img={TeamImg3}
                title="Arij Grissiaa"
              />
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <ProjectBox
                img={TeamImg4}
                title="Wadie Gaddour"
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
