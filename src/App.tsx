import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'
import { PostsProvider } from './context/PostsContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
