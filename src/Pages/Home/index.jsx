import React, { useEffect, useState } from 'react'
import './Home.css'

import ApiService from '../../Service/ApiService'
import BooksTable from '../../Components/BooksTable'
import SearchHeader from '../../Components/SearchHeader'

const queryString = require('query-string')

const Home = () => {
  const [items, setItems] = useState([]) // Array de livros
  const [totalCount, setTotalCount] = useState(0) // Total de livros
  //const [page, setPage] = useState(0)
  //const [rowsPerPage, setRowsPerPage] = useState(5)
  const [isLoading, setIsLoading] = useState(false)

  const bookSearchOnChange = (inputValue, selectedInitialYear, selectedFinalYear) => {
    const parsed = queryString.parse('')

    inputValue && (parsed.Busca = inputValue)
    selectedInitialYear && (parsed.AnoInicial = selectedInitialYear)
    selectedFinalYear && (parsed.AnoFinal = selectedFinalYear)
    //rowsPerPage && (parsed.MaxResultCount = rowsPerPage)
    //page && (parsed.SkipCount = page)

    const params = queryString.stringify(parsed, { sort: false })

    ApiService.SearchBooks(`?${params}`)
      .then(res => {
        setItems(res.items)
        setTotalCount(res.totalCount)
      })
      .catch(error => {
        console.log(`Erro na comunicação com a API ao tentar pesquisar os livros - log(${error})`)
      })
  }

  useEffect(() => {
    if (!items) setIsLoading(true)

    if (items < 1) {
      ApiService.ListBooks()
        .then(res => {
          setIsLoading(false)
          setItems(res.items)
          setTotalCount(res.totalCount)
        })
        .catch(error => {
          setIsLoading(false)
          console.log(`Erro na comunicação com a API ao tentar listar os livros - log(${error})`)
        })
    }
  }, [items])

  const columns = [
    { id: 'titulo', label: 'Livro' },
    { id: 'autor', label: 'Autor' },
    { id: 'editora', label: 'Editora' },
    { id: 'ano', label: 'Ano', align: 'right' },
    { id: 'acao', label: 'Ação', align: 'center' }
  ]

  return (
    <>
      <SearchHeader bookSearchOnChange={bookSearchOnChange} totalCount={totalCount} />
      <div className="main">
        <BooksTable className="Table" columns={columns} data={items} loadingBooks={isLoading} totalCount={totalCount} />
      </div>
    </>
  )
}

export default Home
