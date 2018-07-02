import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({})

class CommentQuestion extends Component {
  render() {
    const { onChange } = this.props

    return (
      <TextField
        key="comment"
        label="Комментарий"
        name="comment"
        multiline
        rowsMax="10"
        onChange={onChange}
        fullWidth
        required
        autoFocus
      />
    )
  }
}

export default withStyles(styles)(CommentQuestion)
