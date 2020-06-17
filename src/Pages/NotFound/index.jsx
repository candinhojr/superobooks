import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  main: {
    textAlign: 'center',
    margin: '1.5em auto'
  },
  root: {
    flexGrow: 1
  },
  title: {
    textTransform: 'uppercase',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}))

export default function NotFound() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Supero
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.main}>
        <h1>Página não encontrada</h1>
        <a href="/">Voltar para a página inicial</a>
      </div>
    </>
  )
}
