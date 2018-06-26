import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({})

class CamsQuestion extends React.Component {
  render() {
    const { outsideCams, insideCams, onChange } = this.props

    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="insideCams"
            label="Внутренние камеры"
            value={insideCams}
            onChange={onChange}
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="outsideCams"
            label="Уличные камеры"
            value={outsideCams}
            onChange={onChange}
            type="number"
            fullWidth
          />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CamsQuestion)
