// This Palette is for dark Mode

//Do not Use this Code it is just for Example
const commonColors = {
  green: { 1: "#40D39C", 2: "#00BF78" },
  blue: "#2E4DD4",
  red: "#E55C5C",
  purple: "#ABABFD",
  darkBlue: "#2E4765",
  darkerBlue: "#242629",
  navyBlue: "#000080c7",
};

const color = {
  blue: { "2E4DD4": "#2E4DD4", "2E4765": "#2E4765" },
  green: { "40D39C": "#40D39C" },
  black: { "1F2123": "#1F2123", 222222: "#222222" },
  gray: { A1A1A1: "#A1A1A1", D5DAE0: "#D5DAE0" },
  primary: commonColors.darkBlue,
  active: commonColors.green["1"],
  status: {
    complete: commonColors.green["2"],
    dispatch: commonColors.blue,
    pending: commonColors.red,
  },
};

const buyerBackground = {
  main: "#F5F6FA",
  dark: commonColors.darkBlue,
  light: "#E3E6F1",
  lighter: "#F4F5F9",
  imageBg: "rgba(243, 243, 243,73%)",
  "2E4765": "#2E4765",
  D5DAE0: "#D5DAE0",
  navyBlue: commonColors.navyBlue,
};

const bgColor = {
  blue: { "2E4DD4": color.blue["2E4DD4"] },
  default: "#fff",
  D5DAE0: "#D5DAE0",
  A1A1A1: "#A1A1A1",
};

const text = {
  primary: "#4D4D4D",
  secondary: "#A1A1A1",
  main: commonColors.darkBlue,
  mainDark: commonColors.darkerBlue,
  dark: "#1F2123",
  darker: "#222222",
  green: { "40D39C": color.green["40D39C"] },
  black: { "1F2123": color.black["1F2123"], 222222: color.black["222222"] },
  gray: { A1A1A1: color.gray["A1A1A1"] },
  warning: "#E57272",
  blue: { dark: "#2E4765" },
  A1A1A1: "#A1A1A1",
  "2E4765": "#2E4765",
  E55C5C: "#E55C5C",
  232020: "#232020",
};

const divider = {
  D5DAE0: "#D5DAE0",
  BFBFBF: "#BFBFBF",
};

// themeing
const primary = {
  main: commonColors.green["1"],
  dark: commonColors.green["1"],
  contrastText: "#fff",
};
const secondary = { main: commonColors.purple, contrastText: "#fff" };
const warning = {
  main: "#F69292",
  contrastText: "#fff",
};
const orange = {
  main: "#FFBC6E",
  contrastText: "#fff",
};
const darkBlue = { main: commonColors.darkBlue, contrastText: "#fff" };
const E55C5C = { main: "#E55C5C", contrastText: "#fff" };

const darkPalette = {
  primary,
  secondary,
  warning,
  orange,
  darkBlue,
  E55C5C,
  background: buyerBackground,
  bgColor,
  dividerColor: divider,
  text,
  color,
  divider: "#C1C1C1",
  font: { main: "Poppins, sans-serif" },
};

export default darkPalette;
