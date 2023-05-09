import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffead2;
  margin: 0;
  margin-bottom: 50px;
  padding: 20px;

  text-align: center;
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
