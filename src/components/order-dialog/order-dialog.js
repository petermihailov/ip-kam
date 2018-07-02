import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Form from './form-call'
import ThankYou from './thank-you'
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
    submited: false,
    isPolicyVisible: false,
  }

  setPolicyVisibility = isPolicyVisible => this.setState({ isPolicyVisible })

  onSubmit = data => {
    alert(JSON.stringify(data))
    this.setState({ submited: true })
  }

  onClose = () => {
    const { onClose } = this.props

    this.setPolicyVisibility(false)
    onClose()
  }

  render() {
    const { classes, open } = this.props
    const { isPolicyVisible, submited } = this.state

    return (
      <Dialog
        open={open}
        onClose={this.onClose}
        aria-labelledby="order-dialog-title"
      >
        {!submited ? (
          <Fragment>
            <DialogTitle id="order-dialog-title">Обратный звонок</DialogTitle>
            <Form
              onSubmit={this.onSubmit}
              setPolicyVisibility={this.setPolicyVisibility}
            />
            {isPolicyVisible ? (
              <Typography variant="caption" className={classes.policy}>
                Нажимая на кнопку "отправить" вы соглашаетесь с{' '}
                <Link to="/privacy-policy" target="_blank">
                  политикой конфиденциальности
                </Link>
              </Typography>
            ) : null}
          </Fragment>
        ) : (
          <Fragment>
            <DialogTitle id="order-dialog-title">Спасибо!</DialogTitle>
            <ThankYou />
          </Fragment>
        )}
      </Dialog>
    )
  }
}

export default withStyles(styles)(OrderDialog)
