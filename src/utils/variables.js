import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#FCFA22',
        light: '#e38519',
        dark: '#9d5b11',
        contrastText: '#000',
      },
      secondary:{
        main: '#dba9ff',
        light: '#fefda9',
        dark: '#980cff',
        contrastText: '#fff',
      }, 
      background:{
        main: '#f8f8f8',
        light: '#ff0000',
        dark: '#b10000',
        contrastText: '#000',
      },    
    },
    typography: {
        fontWeight500: 500,
        fontWeight600: 600,
        fontWeight700: 700,
        fontWeight800: 800,
        fontWeight900: 900,
      },
  });

  export default {
    theme
  }