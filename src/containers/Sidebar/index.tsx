import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Description, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Fernandes Ventura</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        fernandesventura
      </Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
