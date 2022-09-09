import styled from "styled-components";

const StyledLogin = styled.main`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: #8c11be;
  padding-bottom: 40px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 68px;
    div {
      padding-bottom: 24px;
      h2 {
        font-family: "Saira Stencil One", cursive;
        font-weight: 400;
        color: #ffffff;
        font-size: 32px;
        width: 147px;
        height: 50px;
      }
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 13px;
      div {
        padding-bottom: 30px;
        padding-top: 5px;
        button {
          width: 327px;
          height: 46px;
          border: none;
          outline: 5px solid #a328d6;
          border-radius: 5px;
          background-color: #a328d6;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      input {
        width: 326px;
        height: 58px;
        border-radius: 5px;
        background-color: #ffffff;
        outline: none;
        border: 1px solid #d4d4d4;
        font-size: 20px;
        font-weight: 400;
        color: #000000;
        padding-left: 10px;
        ::placeholder {
          color: #000000;
        }
      }
      h1 {
        width: 191px;
        height: 18px;
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        cursor: pointer;
        padding-right: 50px;
      }
    }
  }
`;

export default StyledLogin;
