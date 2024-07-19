import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 29.6rem;
  padding: 64px 0 134px;

  background-image: url('background-cover.png');
  background-repeat: no-repeat no-repeat;
  background-size: cover;
  background-position: top;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Profile = styled.div`
  max-width: 864px;
  border-radius: 10px;
  padding: 4rem 3.2rem;
  background: ${({ theme }) => theme['base-profile']};

  display: flex;
`
