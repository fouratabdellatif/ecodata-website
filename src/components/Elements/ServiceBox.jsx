import React from "react";
import styled from "styled-components";
// Assets
import dataIcon from "../../assets/svg/Services/data.png";
import consultingIcon from "../../assets/svg/Services/consulting.png";
import dashboardingIcon from "../../assets/svg/Services/dashboarding.png";
import predictionIcon from "../../assets/svg/Services/prediction.png";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "data":
      getIcon = <Icon src={dataIcon} alt="data analysis" />;
      break;
    case "consulting":
      getIcon = <Icon src={consultingIcon} alt="consulting" />;
      break;
    case "dashboarding":
      getIcon = <Icon src={dashboardingIcon} alt="dashboarding" />;
      break;
    case "prediction":
      getIcon = <Icon src={predictionIcon} alt="prediction" />;
      break;
    default:
      getIcon = <Icon src={dataIcon} alt="data analysis" />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const Icon = styled.img`
  width: 50px;
`