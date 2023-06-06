import styled, { css } from "styled-components";

const Icon = styled.img`
  filter: blur(6px);
  height: 100%;
  width: 1.5em; // Adjust the desired width
  height: 1.5em; // Adjust the desired height
  ${(props) =>
    props.isHoverable &&
    css`
      &:hover {
        filter: none;
      }
    `}
`;

export default Icon;
