const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(4),
    minHeight: 200
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  },
  modalContent: {
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200
  }
})

export default styles
