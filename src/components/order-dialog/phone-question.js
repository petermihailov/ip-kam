import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({})

class PhoneQuestion extends Component {
  render() {
    const { onChange } = this.props

    return (
      <TextField
        key="phone"
        label="Телефон"
        name="phone"
        onChange={onChange}
        fullWidth
        required
      />
    )
  }
}

export default withStyles(styles)(PhoneQuestion)
