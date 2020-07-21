import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import queryString from 'query-string'
import Service from '../../Service/ApiService'
import Header from '../../Components/Header'
import BooksTable from '../../Components/BooksTable'
import styles from './Home.style'

const Home = () => {
  const [items, setItems] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [params, setParams] = useState({
    Busca: null,
    AnoInicial: null,
    AnoFinal: null,
    SkipCount: 0,
    MaxResultCount: 10,
    Sorting: 'ano'
  })

  const handleParamsToSend = () => {
    if (params.Busca?.trim() === '') {
      params.Busca = null
    }

    const query = queryString.stringify(params)
    return `?${query}`
  }

  const getBooks = () => {
    setIsLoading(true)
    Service.ListBooks(handleParamsToSend())
      .then(res => {
        setItems(res.data.items)
        setTotalCount(res.data.totalCount)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getBooks()
  }, [])

  const handleParams = (name, value) => {
    const newParams = params
    newParams[name] = value
    setParams(newParams)
  }

  return (
    <div>
      <Header
        params={params}
        totalCount={totalCount}
        items={items}
        isLoading={isLoading}
        handleParams={handleParams}
        getBooks={getBooks}
      />
      <BooksTable
        data={items} // array
        loadingBooks={isLoading} //bollean
        totalCount={totalCount} //number
        skipCount={params.SkipCount}
        maxResultCount={params.MaxResultCount}
        sort={params.Sorting} //string
        handleParams={handleParams} //func
        getBooks={getBooks} //func
      />
    </div>
  )
}

export default withStyles(styles)(Home)
