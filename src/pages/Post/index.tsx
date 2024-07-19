import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState, useEffect } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { Header } from '../../components/Header'
import { Container, PostInfo, Info, PostActions, ContentPost } from './styled'
import { api } from '../../lib/axios'

interface User {
  login: string
}
interface Post {
  body: string
  created_at: string
  html_url: string
  title: string
  comments: number
  user: User
}

export function Post() {
  const { number } = useParams()
  const [post, setPost] = useState<Post>({})

  const fetchPost = async () => {
    const response = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
    )

    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <PostInfo>
          <PostActions>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </Link>
            <a href={post.html_url}>
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </PostActions>
          <h1>{post.title}</h1>
          <Info>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              {post.user?.login}
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              {post.created_at &&
                formatDistanceToNow(post.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              {post.comments}
              comentários
            </div>
          </Info>
        </PostInfo>
        <ContentPost>
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}>
            {post.body}
          </Markdown>
        </ContentPost>
      </Container>
    </>
  )
}
