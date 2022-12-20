export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "2px",
          borderRadius: "8px",
          color: theme.palette.text.menu,
          paddingLeft: "20px",
          paddingRight: "20px",
          boxShadow: 1,
          "&:hover": {
            borderWidth: "2px",
          },
        },
        sizeLarge: {
          height: 56,
        },
        gradiented: {
          background:
            "linear-gradient(45deg, rgba(196,84,198,1) 0%, rgba(243,150,131,1) 54%, rgba(237,128,106,1) 100%)",
          color: theme.palette.text.primary,
        },
        text: {
          "&:hover": {
            backgroundColor: theme.palette.primary.primary,
          },
        },
      },
    },
  };
}

// ?  this can be used to make Dark variant of button

// export function DarkButton(theme) {
//     return {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             textTransform: "none",
//             boxShadow: "none",
//             fontFamily: theme.palette.font.main,

//             "&:hover": {
//               boxShadow: "none",
//             },
//           },
//         },
//         variants: [
//           {
//             props: { variant: "mediumMain" },
//             style: {
//               width: "auto",
//               height: "43px",
//               padding: "12px 33px ",
//               textTransform: "none",
//               backgroundColor: theme.palette.primary.main,
//               color: theme.palette.primary.contrastText,
//               fontSize: "16px",
//             },
//           },
//           {
//             props: { variant: "mediumMain", color: "secondary" },
//             style: {
//               backgroundColor: theme.palette.secondary.main,
//               fontSize: "14px",
//             },
//           },
//           {
//             props: { variant: "add", color: "primary" },
//             style: {
//               backgroundColor: theme.palette.common.white,
//               color: theme.palette.primary.main,
//               boxShadow: "0px 3px 6px rgba(0,0,0,8%)",
//               fontSize: "16px",
//               fontWeight: "500",
//               width: "85px",
//               height: "33px",
//               "&:hover": {
//                 backgroundColor: theme.palette.common.white,
//                 color: theme.palette.primary.main,
//                 boxShadow: "0px 3px 6px rgba(0,0,0,8%)",
//               },
//             },
//           },
//         ],
//       },
//     };
//   }
