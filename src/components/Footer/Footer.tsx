import { Container, FooterSection, Link, Links, SectionTitle } from './Styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <article className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Ação</Link>
            </li>
            <li>
              <Link to="/categories#sports">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#cooming-soon">Em breve</Link>
            </li>
          </Links>
        </FooterSection>

        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </article>
    </Container>
  )
}

export default Footer
