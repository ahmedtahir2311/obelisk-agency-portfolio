// This is the Main Palette

const commonColors = {
  black: { default: "#000", main: "#1D1E26" },
  white: { default: "#fff", main: "#FBFBFB", dark: "#d7d8dd" },
  skin: { main: "#f39683", light: "#ed9a8c", dark: "#ed806a" }, // SkinType Color
  purple: { light: "#cdb4db", main: "#c454c6", dark: "#b21db7" },
  gray: { dark: "#c8c8c8", light: "#888" },
  disabled: "rgba(0, 0, 0, 0.38)",
  transparent: "#00000000",
};

const gradiant = {
  main: "linear-gradient(45deg, rgba(196,84,198,1) 0%, rgba(243,150,131,1) 54%, rgba(237,128,106,1) 100%)",
};

const backgroundColor = {
  primary: commonColors.black.main,
  paper: commonColors.white.main,
  transparent: commonColors.black.transparent,
  default: commonColors.white.default,
  gradiant: gradiant.main,
};

const text = {
  primary: commonColors.white.main,
  secondary: commonColors.skin.main,
  tertiary: commonColors.purple.main,
  disabled: commonColors.disabled,
  dark: commonColors.white.dark,
  gray: {
    light: commonColors.gray.light,
    dark: commonColors.gray.dark,
  },
};

const mainPalette = {
  mode: "light",
  common: commonColors,
  primary: {
    main: commonColors.skin.main,
    dark: commonColors.skin.dark,
    light: commonColors.skin.light,
    contrastText: "#fff",
  },
  secondary: {
    main: commonColors.purple.main,
    dark: commonColors.purple.dark,
    light: commonColors.purple.light,
    contrastText: "#fff",
  },
  dark: {
    main: commonColors.black.main,
    dark: commonColors.black.main,
    contrastText: commonColors.white.dark,
  },
  dark2: {
    main: commonColors.white.main,
    dark: commonColors.white.main,
    contrastText: commonColors.white.dark,
  },
  bgColor: gradiant,
  contrastThreshold: 3,
  text,
  background: backgroundColor,
  font: { main: "Rubik, sans-serif" },
};

export default mainPalette;
