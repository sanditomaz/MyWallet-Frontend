import styled from "styled-components";

const StyledAddMoney = styled.main`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: #8c11be;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 50px;
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  aside {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    h1 {
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      padding: 25px 0 0 3px;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
      width: 90%;
      padding: 40px 0 40px 0;
    }

    input {
      width: 99%;
      height: 58px;
      background-color: #ffffff;
      border-radius: 5px;
      outline: none;
      border: none;
      margin-top: 13px;
      padding-left: 10px;
      font-size: 20px;

      ::placeholder {
        font-size: 20px;
        font-weight: 400;
        color: #000000;
      }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      min-width: 326px;
      width: 100%;
      height: 46px;
      background-color: #a328d6;
      border-radius: 5px;
      outline: none;
      border: none;
      font-size: 20px;
      font-weight: 400;
      color: #ffffff;
      padding-left: 10px;
      margin-top: 13px;
      cursor: pointer;
    }
  }
`;
export default StyledAddMoney;
