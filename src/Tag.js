import styled from "styled-components";

const Tag = styled.span`
  display: inline-block;
  padding: 0.5em;
  background-color: ${(props) => props.color || "red"};
  border-radius: ${(props) => props.borderRadius || "1em"};
`;

export default Tag;
