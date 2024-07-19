import { useCallback, useContext, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { api } from '../../lib/axios'
import { Header } from '../../components/Header'

import {
  Container,
  Profile,
  Avatar,
  ProfileContent,
  ProfileHeader,
  Info,
  PostsContainer,
  Post,
  PostHeader,
  PostBody,
} from './styled'
import { Search } from './components/Search'
import { PostContext } from '../../context/PostsContext'

interface Profile {
  name: string
  bio: string
  login: string
  avatar_url: string
  company: string
  html_url: string
  followers: number
}

export function Blog() {
  const { posts } = useContext(PostContext)
  const [profile, setProfile] = useState<Profile>({})

  const fetchProfileUser = useCallback(async () => {
    const response = await api.get('users/shindhi')

    setProfile(response.data)
  }, [])

  useEffect(() => {
    fetchProfileUser()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Profile>
          <Avatar src={profile.avatar_url} alt="" />

          <ProfileContent>
            <ProfileHeader>
              <span>{profile.name}</span>
              <div>
                <a href={profile.html_url}>GITHUB</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </ProfileHeader>

            <p>{profile.bio}</p>

            <Info>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <img src="github-brands.svg" alt="" />
                {profile.login}
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <img src="building-solid.svg" alt="" />
                {profile.company}
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <img src="user-group-solid.svg" alt="" />
                {profile.followers} seguidores
              </div>
            </Info>
          </ProfileContent>
        </Profile>

        <Search />

        <PostsContainer>
          {posts.map((post) => {
            return (
              <Post key={post.id} to={`/post/${24}`}>
                <PostHeader>
                  <h3>{post.title}</h3>
                  <span>
                    {formatDistanceToNow(post.updated_at, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </PostHeader>
                <PostBody>
                  <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
                </PostBody>
              </Post>
            )
          })}
        </PostsContainer>
      </Container>
    </>
  )
}
