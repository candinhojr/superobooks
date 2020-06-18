import React, { useEffect, useState } from 'react'
import './Home.css'

import ApiService from '../../Service/ApiService'
import BooksTable from '../../Components/BooksTable'
import Header from '../../Components/Header'

const queryString = require('query-string')

const Home = () => {
  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [inputSearchValue, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const bookSearchOnChange = (inputValue, selectedInitialYear, selectedFinalYear) => {
    setInput(inputValue)

    const parsed = queryString.parse('')

    inputValue && (parsed.Busca = inputValue)
    selectedInitialYear && (parsed.AnoInicial = selectedInitialYear)
    selectedFinalYear && (parsed.AnoFinal = selectedFinalYear)

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

    if (!inputSearchValue) {
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
  }, [items, inputSearchValue])

  const columns = [
    { id: 'titulo', label: 'Livro' },
    { id: 'autor', label: 'Autor' },
    { id: 'editora', label: 'Editora' },
    { id: 'ano', label: 'Ano', align: 'right' },
    { id: 'acao', label: 'Ação', align: 'center' }
  ]

  return (
    <>
      <Header bookSearchOnChange={bookSearchOnChange} inputSearchValue={inputSearchValue} totalCount={totalCount} />
      <div className="main">
        <BooksTable className="Table" columns={columns} data={items} loadingBooks={isLoading} totalCount={totalCount} />
      </div>
    </>
  )
}

export default Home
