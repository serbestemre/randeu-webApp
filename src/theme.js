import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PublicSans from "./assets/fonts/PublicSans-VariableFont_wght.ttf";

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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FAFAFB",
      main: "#fafafb",
      dark: "#616162",
      contrastText: "#D01C1F",
    },
    secondary: {
      light: "#EA3639",
      main: "#D01C1F",
      dark: "#B70306",
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Recoleta",
      fontWeight:"300"
    },
    h2: {
      fontFamily: "Poppins",
    },
    h3: {
      fontFamily: "Lato",
      fontWeight: "300"
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [publicSans],
      },
    },
  },
});

export default theme;
