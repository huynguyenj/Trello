import { useState } from 'react'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <Button variant='containers' onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </Button>
    </>
  )
}

export default App
