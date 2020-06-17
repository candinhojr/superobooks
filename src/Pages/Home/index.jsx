import React, { useEffect, useState } from 'react'
import './Home.css'

import ApiService from '../../Service/ApiService'
import BooksTable from '../../Components/BooksTable'
import Header from '../../Components/Header'

const Home = props => {
  const [items, setItems] = useState([])
  const [inputSearchValue, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const bookSearchOnChange = input => {
    ApiService.SearchBooks(input)
      .then(res => setItems(res.items))
      .catch(error => console.log(`Erro na comunicação com a API ao tentar pesquisar os livros - log(${error})`))
  }

  const details = id => {
    ApiService.ListBook(id)
      .then(res => {
        if (res) {
          alert(JSON.stringify(res))
          setInput('')
        }
      })
      .catch(error => console.log(`Erro na comunicação com a API ao tentar listar o livro - log(${error})`))
  }

  useEffect(() => {
    if (!items) setIsLoading(true)

    ApiService.ListBooks()
      .then(res => {
        setIsLoading(false)
        setItems(res.items)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(`Erro na comunicação com a API ao tentar listar os livros - log(${error})`)
      })
  }, [items])

  const columns = [
    { id: 'titulo', label: 'Livro' },
    { id: 'autor', label: 'Autor' },
    { id: 'editora', label: 'Editora' },
    { id: 'ano', label: 'Ano', align: 'right' }
  ]

  return (
    <>
      <Header bookSearchOnChange={bookSearchOnChange} inputSearchValue={inputSearchValue} />
      <div className="main">
        <BooksTable className="Table" columns={columns} data={items} details={details} loadingBooks={isLoading} />
      </div>
    </>
  )
}

export default Home
