import { createTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = createTheme({
  trelloCustom:{
    appBarHeight: '80px',
    boardBarHeight: '80px'
  },
  colorSchemes: {
    dark: {
      palette:{
        primary:{
          main:'#352f44',
          light:'#5c5470',
          dark:'#141010'
        },
        text:{
          primary:'#f70776'
        }
      }
    },
    light: {
      palette:{
        primary:{
          main:'#53a8b6',
          light:'#79c2d0',
          dark:'#5585b5'
        }
      }
    }
  }
})
export default theme