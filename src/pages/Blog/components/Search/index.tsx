import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PostContext } from '../../../../context/PostsContext'
import { FormContainer } from './styled'

const searchSchema = z.object({
  query: z.string(),
})

type searchInputs = z.infer<typeof searchSchema>

export function Search() {
  const { fetchIssues, posts } = useContext(PostContext)

  const { register, handleSubmit } = useForm<searchInputs>({
    resolver: zodResolver(searchSchema),
  })

  async function handleSearchPosts(data: searchInputs) {
    await fetchIssues(data.query)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormContainer>
  )
}
