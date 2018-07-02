import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({})

class NameQuestion extends Component {
  render() {
    const { onChange } = this.props

    return (
      <TextField
        key="name"
        label="Ваше имя"
        name="name"
        onChange={onChange}
        fullWidth
        required
        autoFocus
      />
    )
  }
}

export default withStyles(styles)(NameQuestion)
