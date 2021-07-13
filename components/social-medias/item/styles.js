import styled from "styled-components";

export const Container = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.4s ease-in-out;
  }
  & .shadow {
    position: absolute;
    width: 77%;
    height: 100%;
    opacity: 0.2;
    box-shadow: 6px 6px 5px 0px #000000;
    ${(props) =>
      props.bordered
        ? "border-radius: 56px; margin-left:5px; width: 75px;"
        : "border-radius: 20px;"}
    top: 0px;
    left: 10%;
  }
  @media (max-width: 768px) {
    .img {
      min-width: 70% !important;
      min-height: 70% !important;
    }
    .shadow {
      width: 60%;
      height: 74%;
      top: 8px;
    }
  }
`;
