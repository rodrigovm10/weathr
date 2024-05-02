import useSWR from 'swr'
import { ChangeEvent, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { fetcherSearch } from '@/services/fetcher'
import { URL_SEARCH } from '@/services/rapidapi-config'

export function useSearch() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [search, setSearch] = useState('')

  const debouncedSearchTerm = useDebounce(search, 300)
  const { data, isLoading } = useSWR(`${URL_SEARCH}+${debouncedSearchTerm}`, fetcherSearch)

  const handleClickBarOpen = () => {
    setShowSidebar(prevState => !prevState)
  }

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value.toLowerCase())
  }

  return { showSidebar, data, isLoading, handleClickBarOpen, handleChangeSearch }
}
