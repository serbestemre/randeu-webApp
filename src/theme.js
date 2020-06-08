import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import PublicSans from "./assets/fonts/PublicSans-VariableFont_wght.ttf";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
import RobotoThin from "./assets/fonts/Roboto-Thin.ttf";
import Oswald from "./assets/fonts/Oswald-VariableFont_wght.ttf";
import { trTR } from '@material-ui/core/locale';


const publicSans = {
  fontFamily: "PublicSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('PublicSans'),
    local('PublicSans-Regular'),
    url(${PublicSans}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const robotoRegular = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('PublicSans'),
    local('PublicSans-Regular'),
    url(${RobotoRegular}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const robotoThin = {
  fontFamily: "RobotoThin",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('PublicSans'),
    local('PublicSans-Thin'),
    url(${RobotoThin}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const oswald = {
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
    local('Oswald'),
    local('Oswald-Thin'),
    url(${Oswald}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const primaryColor = {
  light: "#FAFAFB",
  main: "#04cfd6",
  dark: "#616162",
  contrastText: "#fafafb",
};

const secondaryColor = {
  light: "#EA3639",
  main: "#D01C1F",
  dark: "#B70306",
  contrastText: "#fff",
};

let theme = createMuiTheme({
  palette: {
    primary: { ...primaryColor },
    secondary: { ...secondaryColor },
    success:{ 
      light:"#39DB80",
      main:"#4BCA81",
      dark:"#20CC82"
    }
  },
  typography: {
    fontFamily: "Open Sans, Raleway, Roboto",
    h1: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize:"3.5rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize:"2.5rem",
      fontWeight:300,
    },
    h3: {
      fontFamily: "Lato",
      fontWeight: "300",
    },
    h5: {
      fontFamily: "Raleway",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [publicSans, robotoRegular, robotoThin, oswald],
      },
    },

    MuiListItem: {
      root: {
        color: secondaryColor.main,
        "&$selected": {
          color: secondaryColor.main,
          backgroundColor: "transparent",
          borderBottom: `1px solid ${primaryColor.main}`,
        },
      },

      button: {
        color: secondaryColor.main,
        "&:hover": {
          backgroundColor: "transparent",
          borderBottom: `1px solid ${primaryColor.main}`,
        },
      },
    },
  },
},trTR);

theme = responsiveFontSizes (theme);

export default theme;
