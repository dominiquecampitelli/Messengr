import styled from "styled-components";

export const Panel = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;

export const Content = styled.div`
  max-width: 1920px;
  width: 70%;
  height: 80%;
  border-radius: 10px;
  background: linear-gradient(315deg, #cacaca, #f0f0f0);
  box-shadow: -5px -5px 10px #5a5a5a, 5px 5px 10px #9999ff;
`;
