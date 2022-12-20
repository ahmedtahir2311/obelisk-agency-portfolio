import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import ComponentsOverrides from "./components";
import mainPalette from "./palette";
import typography from "./typography";

const ThemeConfiguration = ({ children }) => {
  const applyTheme = () => {
    // simple theme creation
    let theme = createTheme({
      palette: mainPalette,
    });

    return createTheme(theme, {
      components: ComponentsOverrides(theme),
      typography: typography(theme),
    });

    // 1. This is the scenario of Using light and Dark theme

    ////////////////////////////////2.This theme is created on the bases of Two different Portals //////////////////////////////
    //   let theme = createTheme({
    //     palette:
    //       isUser(route) || isProductsDetail(route) || allowBuyerTheme    //3.Some Condition to apply different theme Theme
    //         ? buyerPalette
    //         : palette,
    //   });
    //   if (isUser(route) || isProductsDetail(route) || allowBuyerTheme) {   //4. Some Condition to apply different theme Theme

    //     return createTheme(theme, {
    //       components: buyerComponentsOverrides(theme),
    //       typography: buyerTypography(theme),
    //       shadows,
    //     });
    //   } else {
    //     return createTheme(theme, {                        //5.Some Condition to apply different theme Theme
    //       components: componentsOverride(theme),
    //       typography: typography(theme),
    //       shape,
    //     });
    //   }
    // };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={applyTheme()}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfiguration;

// by Wrapping this component to the main thing it will apply theme to the component
