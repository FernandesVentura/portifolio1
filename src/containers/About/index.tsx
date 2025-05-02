import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ut eos
      atque labore, ad blanditiis vitae vel quae odit natus, in neque eius
      praesentium. Exercitationem molestias deserunt reiciendis quaerat facere!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=FernandesVentura&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FernandesVentura&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default About
