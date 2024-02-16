import styled from "styled-components";

export const Headline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 2rem;

  > img {
    width: 60px;
    height: 60px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-family: Roboto, sans-serif;
  font-size: 1.875rem;
  font-weight: 900;
  color: #482880;
`;

export const Footerline = styled.p`
  display: flex;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`;
