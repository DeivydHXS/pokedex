import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',      
        contrastText: '#fff',
    },
    secondary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#000',
    },
  },
  components: { // Ver estilos
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            textTransform: 'none',
            
          },
        },
        {
          props: { variant: 'text', color: 'secondary' },
          style: {
            
          },
        },
      ],
    }
  }
});