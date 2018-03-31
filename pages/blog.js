import styled from "styled-components";

import Menu from "../components/Menu";

export default () => (
  <div>
    <Menu />
    <Title>Blog</Title>
    <Paragraph>This would be a blog!</Paragraph>
  </div>
);

const Title = styled.h1`
  font-size: 2em;
  color: tomato;
  border: 2px dotted tomato;
`;

const Paragraph = styled.p`
  font-size: 1em;
  background-color: black;
  color: white;
`;
