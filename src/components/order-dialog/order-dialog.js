import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Form from './form-call'
import ThankYou from './thank-you'
import Error from './error'
import Typography from '@material-ui/core/Typography'
import Link from 'gatsby-link'

const styles = theme => ({
  policy: {
    padding: '0 10px 10px',
    marginTop: -20,
  },
})

class OrderDialog extends Component {
  state = {
    isSubmited: false,
    isError: false,
    isPolicyVisible: false,
  }

  setPolicyVisibility = isPolicyVisible => this.setState({ isPolicyVisible })

  onSubmit = data => {
    alert(JSON.stringify(data))
    this.setState({ isSubmited: true })
  }

  onError = () => this.setState({ isError: true })

  onClose = () => {
    const { onClose } = this.props

    this.setPolicyVisibility(false)
    onClose()
  }

  render() {
    const { classes, open, title } = this.props
    const { isPolicyVisible, isSubmited, isError } = this.state

    return (
      <Dialog
        open={open}
        onClose={this.onClose}
        aria-labelledby="order-dialog-title"
      >
        {isError ? (
          <Error />
        ) : isSubmited ? (
          <ThankYou />
        ) : (
          <Fragment>
            <DialogTitle id="order-dialog-title">{title}</DialogTitle>
            <Form
              onError={this.onError}
              onSubmit={this.onSubmit}
              setPolicyVisibility={this.setPolicyVisibility}
            />
            {isPolicyVisible && (
              <Typography variant="caption" className={classes.policy}>
                Нажимая на кнопку "отправить" вы соглашаетесь с{' '}
                <Link to="/privacy-policy" target="_blank">
                  политикой конфиденциальности
                </Link>
              </Typography>
            )}
          </Fragment>
        )}
      </Dialog>
    )
  }
}

export default withStyles(styles)(OrderDialog)
