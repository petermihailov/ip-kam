import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'

const styles = theme => ({})

class CamsQuestion extends React.Component {
  render() {
    const { outsideCams, insideCams, onChange } = this.props

    return (
      <FormGroup>
        <TextField
          name="insideCams"
          label="Внутренние камеры"
          value={insideCams}
          onChange={onChange}
          type="number"
        />
        <TextField
          name="outsideCams"
          label="Уличные камеры"
          value={outsideCams}
          onChange={onChange}
          type="number"
        />
      </FormGroup>
    )
  }
}

export default withStyles(styles)(CamsQuestion)
