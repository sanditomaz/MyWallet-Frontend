import styled from "styled-components";

const StyledHome = styled.main`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: #8c11be;
  padding-bottom: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

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
      padding: 25px 0 22px 3px;
    }
    div {
      padding: 25px 0 22px 0;
      width: 23px;
      height: 24px;
      color: #ffffff;
      font-weight: 600;
      font-size: 24px;
    }
  }
`;

export default StyledHome;
