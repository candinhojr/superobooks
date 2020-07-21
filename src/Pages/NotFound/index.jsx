import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../../Components/Header'

const useStyles = makeStyles(theme => ({
  main: {
    textAlign: 'center',
    margin: '1.5em auto'
  }
}))

export default function NotFound() {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.main}>
        <h1>Página não encontrada</h1>
        <a href="/">Voltar para a página inicial</a>
      </div>
    </>
  )
}
