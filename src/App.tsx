import { Container } from '@mui/system'
import Boid from './components/Boid'
import { BoidProvider } from './contexts/BoidProvider'

function App() {
  return (
    <BoidProvider>
      <Container>
        <Boid/>
      </Container>
    </BoidProvider>
  )
}

export default App
