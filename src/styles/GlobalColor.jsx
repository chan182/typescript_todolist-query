import { createGlobalStyle } from "styled-components";

const GlobalColor = createGlobalStyle`
  :root {
    --header-color:#ffc0bd;
    --header-font-color:#8f1d36;
    --header-button-color:#ff5f5f;
    --header-button-border:#ff5151;
    --login-signup-background-color:#f9e8e6;
    --login-signup-input-background-color:	#add8e6;
    --login-signup-input-bottom:#c0827b;
    --login-signup-button:#e9b0ab;
    --login-signup-button-transition:#ed8957;
    --login-signup-button-border:#757f76;
    --signup-profileimg-text:#0044ff;
    --search-input-background-color:#d1e9ff;
    --search-button:#4dcaff;
    --footer-backgound:#78b3cd;
    --date-course-title:#eaa955;
    --white: #fff;
    --recommend-date-title:#b2b2ff;
  }
`;

export default GlobalColor;
