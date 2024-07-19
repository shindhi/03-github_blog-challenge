import { HeaderContainer } from './styled'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Github Blog" />
    </HeaderContainer>
  )
}
