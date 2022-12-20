//This Filed shows how to override default

export function FormField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: theme.palette.text.secondary,
          },

          "& .MuiOutlinedInput-input": {
            borderRadius: "4px",
            padding: "12px 15px",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            padding: "12px 15px",
            borderRadius: "4px",
          },
        },
        select: {
          color: theme.palette.text.main,
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderRadius: "4px",

          "& .MuiOutlinedInput-root": {},

          "& .MuiOutlinedInput-input": {},
        },
      },
    },
  };
}
