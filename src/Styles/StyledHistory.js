import styled from "styled-components";

const StyledHistory = styled.div`
  min-width: 326px;
  width: 100%;
  max-height: 446px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-all;
  word-wrap: break-word;

  main {
    min-width: 326px;
    width: 90%;
    min-height: 446px;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    span {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
      padding-top: 23px;
    }
    section {
      min-width: 193px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      nav {
        display: flex;

        p {
          padding-left: 12px;
          font-weight: 400;
          font-size: 16px;
          color: #c6c6c6;
        }
      }
      h1 {
        max-width: 190px;
        padding-left: 12px;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
      }

      h3 {
        padding-left: 12px;
        font-weight: 700;
        font-size: 17px;
        padding-bottom: 10px;
        padding-top: 50px;
      }
      h4 {
        padding-right: 12px;
        font-weight: 400;
        font-size: 17px;
        padding-bottom: 10px;
        padding-top: 50px;
        color: ${({ totalBalance }) =>
          totalBalance > 0 ? "#03AC00" : "#C70000"};
      }
    }
  }
`;

export default StyledHistory;
