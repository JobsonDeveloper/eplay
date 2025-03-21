import { ReactNode } from 'react'
import { Container, Title } from './Styles'

export type Props = {
  id?: string
  title: string
  background: 'black' | 'grey'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
