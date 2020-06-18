import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import * as _ from 'lodash'
import styles from './Modal.style'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Loading from '../Loading'

// Sizes available fro te maxWidth to set on the Modal are: "xs", "sm" ,"md", "lg", "xl"

const Modal = props => {
  const { open, onClose, maxWidth, name, classes, title, livro, loading, hasButton } = props

  const id = _.camelCase(name)

  return (
    <Dialog
      fullWidth={true}
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
      aria-labelledby={id}
      className={classes.formControl}
    >
      {title && (
        <DialogTitle id="max-width-dialog-title">
          <Typography
            style={{
              fontSize: 18,
              fontWeight: 'Bold'
            }}
          >
            {title}
          </Typography>
        </DialogTitle>
      )}

      {loading && <Loading />}
      {!loading && (
        <DialogContent className={classes.modalContent}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Typography variant="subtitle1">{livro?.titulo}</Typography>
                <Typography variant="body2" color="textSecondary">({livro?.isbn})</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">Autor:</Typography>
                <Typography variant="body2">{livro?.autor}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">Editora:</Typography>
                <Typography variant="body2">{livro?.editora}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">Ano:</Typography>
                <Typography variant="body2">{livro?.ano}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">Idioma:</Typography>
                <Typography variant="body2">{livro?.idioma}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" color="textSecondary">Peso:</Typography>
                <Typography variant="body2">{livro?.peso}g</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" color="textSecondary">Comprimento:</Typography>
                <Typography variant="body2">{livro?.comprimento}cm</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" color="textSecondary">Largura:</Typography>
                <Typography variant="body2">{livro?.largura}cm</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" color="textSecondary">Altura:</Typography>
                <Typography variant="body2">{livro?.altura}cm</Typography>
              </Grid>
            </Grid>
          </div>
        </DialogContent>)}
      {hasButton && (
        <DialogActions>
          <Button
            style={{
              marginTop: 10,
              height: 40
            }}
            variant={'contained'}
            color={'primary'}
            onClick={() => onClose()}
          >
            Fechar
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default withStyles(styles)(Modal)
