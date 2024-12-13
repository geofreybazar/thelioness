import { Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import variables from '../../utils/variables';

const theme = variables.theme;

function ButtonComponent({fontweights, color, onClick, children}) {

    const fontWeight = fontweights == 900
    ? theme.typography.fontWeight900
    : fontweights == 800
    ? theme.typography.fontWeight800
    : fontweights == 700
    ? theme.typography.fontWeight700
    : fontweights == 600
    ? theme.typography.fontWeight600
    : fontweights == 500
    ? theme.typography.fontWeight500
    : theme.typography.fontWeightRegular;

  return (
    <ThemeProvider theme={theme}>
        <Button onClick={onClick} variant="contained" color={color}> 
            <Typography sx={{ fontWeight:{fontWeight}}}>
              {children}
            </Typography>                    
        </Button>
    </ThemeProvider>
  )
}

export default ButtonComponent