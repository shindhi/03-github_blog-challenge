import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 86.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    padding: 1.2rem 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
