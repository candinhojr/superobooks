import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import styles from './loading.style'

const loadingSpinner = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography color={'primary'} className={classes.loadingText}>
        Carregando...
      </Typography>
    </div>
  )
}

export default withStyles(styles)(loadingSpinner)
