import { Button, Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles' // ✅ Correct import
import { useState } from 'react'
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
