import * as S from './Styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Container>
      <article className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>

        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos em promoção"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos que serão lançados em breve"
                to="/#cooming-soon"
              >
                Em breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>

        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </article>
    </S.Container>
  )
}

export default Footer
