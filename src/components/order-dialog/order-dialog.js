import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Form from './form-call'

class OrderDialog extends React.Component {
  state = {
    submited: false,
  }

  onSubmit = data => {
    alert(JSON.stringify(data))
    this.setState({ submited: true })
  }

  render() {
    const { open, onClose } = this.props
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="order-dialog-title"
      >
        <DialogTitle id="order-dialog-title">Обратный звонок</DialogTitle>
        <Form onSubmit={this.onSubmit} />
      </Dialog>
    )
  }
}

export default OrderDialog
