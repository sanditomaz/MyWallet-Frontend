import styled from "styled-components";

const StyledBoxes = styled.div`
  min-width: 326px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    min-width: 326px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    gap: 15px;
    padding-top: 13px;
  }

  section {
    min-width: 155px;
    width: 100%;
    min-height: 114px;
    background-color: #a328d6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    div {
      margin: 10px 10px 10px 10px;
      color: #ffffff;
      font-weight: 400;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    h2 {
      width: 64px;
      padding: 10px 0 9px 10px;
      font-size: 17px;
      font-weight: 700;
      color: #ffffff;
    }
  }
`;

export default StyledBoxes;
