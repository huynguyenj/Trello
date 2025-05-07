import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles' // ✅ Correct import
import { useState } from 'react'
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
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <LightModeIcon/> Light
          </Box>
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
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <ModeSelection/>
      <ModeToggle />
      <h1>Hello</h1>
      <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Typography variant="body2" color="text.secondary">
        Test theme
      </Typography>
    </>
  )
}

export default App
