import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledMenu = styled.nav`
  width: 190px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  z-index: 0;
  position: fixed;
  /* display: block; */
  @media (max-width: 767px) {
    display: none;
  }
`;
export const MenuNavBar = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: ${colors.blackRaisin};
  }
`;
export const MenuOpts = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      list-style: none;
      a {
        color: ${colors.blackRaisin};
        text-decoration: none;
        display: flex;
        align-items: center;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    /* margin: 20px 0 0 0; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    height: 30px;
    /* width: 100%; */
    position: sticky;
    bottom: 0;
    z-index: 999;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  }
`;
