import * as S from './Styles'

export type Props = {
  id?: string
  title: string
  background: 'black' | 'grey'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <S.Container background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        {children}
      </div>
    </S.Container>
  )
}

export default Section
