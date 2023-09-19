import { createContext } from 'react'
import useGetData from '../hooks/useGetData'
export const ApiContext = createContext()

const URL_CATEGORY = 'http://localhost:3000/categorias'
const URL_VIDEOS = 'http://localhost:3000/videos'

function Api({ children }) {
  const { data: categories, refreshData: refreshListCategories } =
    useGetData(URL_CATEGORY)
  const { data: videos, refreshData: refreshListVideos } =
    useGetData(URL_VIDEOS)

  return (
    <ApiContext.Provider
      value={{ videos, refreshListVideos, categories, refreshListCategories }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export default Api