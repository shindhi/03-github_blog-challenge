import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 86.4rem;
  width: 100%;
`

export const PostInfo = styled.div`
  margin-top: calc(0px - 29.6rem + 20.8rem);
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 3.2rem;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 20%);

  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-weight: 700;
    font-size: 2.4rem;
    margin-top: 2rem;
  }
`
export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.blue};

    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
`

export const Info = styled.div`
  margin-top: 0.8rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 3.2rem;

  div {
    color: ${({ theme }) => theme['base-span']};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    svg {
      color: ${({ theme }) => theme['base-span']};
      font-size: 1.8rem;
    }
  }
`

export const ContentPost = styled.div`
  padding: 4rem 3.2rem;
  max-width: 86.4rem;

  img {
    width: 100%;
  }
`
