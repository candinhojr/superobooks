import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Search from '../Search'

const useStyles = makeStyles(theme => ({
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

export default function Header(props) {
  const classes = useStyles()

  const { bookSearchOnChange, inputSearchValue } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Supero
          </Typography>
          <Search bookSearchOnChange={bookSearchOnChange} inputSearchValue={inputSearchValue} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
