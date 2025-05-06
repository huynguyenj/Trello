import { createTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = createTheme({
  colorSchemes: {
    dark: {
      palette:{
        primary:{
          main:'#fff'
        },
        text:{
          primary:'#f70776'
        }
      }
    },
    light: {
      palette:{
        primary:{
          main:'#000'
        }
      }
    }
  }
})
export default theme