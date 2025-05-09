import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

// import useMediaQuery from '@mui/material/useMediaQuery'
function ModeSelection() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode || ''}
        onChange={handleChange}
        label="Mode"
      >
        <MenuItem value='light'>
          <div style={{ display:'flex', alignItems:'center', gap:1 }}>
            <LightModeIcon/> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <DarkModeIcon/> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <SettingsBrightnessIcon/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}


function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
      <Box sx={{
        width: '100%',
        height:(theme) => theme.trelloCustom.appBarHeight,
        backgroundColor:'primary.light',
        display:'flex',
        alignItems:'center' }}>
        <ModeSelection/>
      </Box>
      <Box sx={{
        width: '100%',
        height:(theme) => theme.trelloCustom.boardBarHeight,
        backgroundColor:'primary.dark',
        display:'flex',
        alignItems:'center' }}>
          Board Bar
      </Box>
      <Box sx={{
        width: '100%',
        height:(theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
        backgroundColor:'primary.main',
        display:'flex',
        alignItems:'center' }}>
          Box content
      </Box>
    </Container>
  )
}

export default App
