import styled from "styled-components";

export const Bar = styled.section`
  width: 100%;
  height: 360px;
  background: #F6F6F6;

  .dark & {
    background-color: #222831;
  }
`;

export const Info = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  & p {
    padding-top: 15px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: bold;

  .dark & {
    color: #eee;
  }
`;
