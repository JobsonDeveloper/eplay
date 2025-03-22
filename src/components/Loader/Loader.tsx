import { PacmanLoader } from 'react-spinners'
import { Container } from './Styles'
import { colors } from '../../Styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  )
}

export default Loader
