import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { api } from '../lib/axios'

interface PostsProviderProps {
  children: ReactNode
}

interface Posts {
  title: string
  updated_at: string
  body: string
  id: number
  number: number
}

interface PostsContextType {
  posts: Posts[]
  fetchIssues: (search: string) => Promise<void>
}

export const PostContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Posts[]>([])

  const fetchIssues = useCallback(async (search = '') => {
    const userName = 'rocketseat-education'
    const repo = 'reactjs-github-blog-challenge'
    const query = `${search} repo:${userName}/${repo}/`

    const response = await api.get('search/issues', {
      params: {
        q: query,
      },
    })

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <PostContext.Provider
      value={{
        posts,
        fetchIssues,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
