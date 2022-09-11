import styled from "styled-components";

const StatusColor = styled.h2`
  padding-right: 12px;
  font-weight: 400;
  color: ${({ status }) => (status === "green" ? "#03AC00" : "#C70000")};
  font-size: 16px;
`;

export default StatusColor;
