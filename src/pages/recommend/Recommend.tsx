import styled from "styled-components";
import Back from "../../assets/images/background.png";

const RecommendContainer = styled.div`
  padding-left: 250px;
  background: url(${Back});

  width: 100%;
  min-height: 100vh;
`;

const Title = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleName = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
`;

export { RecommendContainer, Title, TitleName };
