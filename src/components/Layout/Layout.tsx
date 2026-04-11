import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import './styles.css'
import { NavLink, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      {/* cabeçalho */}
      <header>
        <div className='container'>
          <span className="logo">
            LP
          </span>

          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/projects">Projetos</NavLink>
            <NavLink to="/contact">Contato</NavLink>
          </nav>
        </div>
      </header>

      {/* conteúdo */}
      <main>
        <Outlet />
      </main>

      {/* rodapé */}
      <footer>
        <span>
          ©2026 Lucas Pamplona
        </span>

        <div>
          <a href="https://github.com/pamplona007">
            Github
            <IconBrandGithub /> 
          </a>
          <a href="https://github.com/pamplona007">
            LinkedIn
            <IconBrandLinkedin />
          </a>
          <a href="mailto:pamplona.developer@gmail.com">
            Email
            <IconMail />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Layout