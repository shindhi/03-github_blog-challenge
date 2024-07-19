import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 86.4rem;
  width: 100%;
`

export const Profile = styled.div`
  margin-top: calc(0px - 29.6rem + 20.8rem);
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 3.2rem;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 20%);
  margin-bottom: 7.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
`
export const Avatar = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    margin-top: 0.8rem;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
    line-height: 130%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      color: ${({ theme }) => theme.blue};
      font-weight: 700;
      font-size: 1.2rem;
      text-decoration: none;
    }

    svg {
      color: ${({ theme }) => theme.blue};
      font-size: 1.2rem;
    }
  }
`

export const Info = styled.div`
  color: ${({ theme }) => theme['base-subtitle']};
  margin-top: 2.4rem;

  display: flex;
  gap: 2.4rem;

  svg {
    margin-right: 0.8rem;
    color: ${({ theme }) => theme['base-label']};
    font-size: 1.8rem;
  }
`

export const PostsContainer = styled.div`
  max-width: 86.4rem;
  margin-top: 4.8rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(41.6rem, 1fr));
  gap: 3.2rem;
`

export const Post = styled(Link)<LinkProps>`
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 3.2rem;
  max-height: 26rem;
  text-decoration: none;
  color: ${({ theme }) => theme['base-text']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.6rem;

  h3 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 1.4rem;
    display: block;
    padding-top: 0.5rem;
    white-space: nowrap;
  }
`

export const PostBody = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
