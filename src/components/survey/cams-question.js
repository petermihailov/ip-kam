import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'

const styles = theme => ({})

class CamsQuestion extends React.Component {
  renderSelect = (name, value, label) => {
    const {onChange} = this.props

    const id = name + '-id';
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          inputProps={{
            name,
            id,
          }}
          native
        >
          <option value=""/>
          {
            Array.apply(null, {length: 16}).map((val,idx) =>
              <option key={idx} value={idx + 1}>{idx + 1}</option>
            )
          }
        </Select>
      </FormControl>
    )
  }

  render() {
    const { outsideCams, insideCams } = this.props

    return (
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          {
            this.renderSelect('insideCams', insideCams, 'Внутренние камеры')
          }
        </Grid>
        <Grid item xs={12} sm={6}>
          {
            this.renderSelect('outsideCams', outsideCams, 'Уличные камеры')
          }
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CamsQuestion)