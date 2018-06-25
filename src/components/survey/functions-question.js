import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = theme => ({})

const data = [
  'Удаленный доступ',
  'Архив более 1 месяца',
  'Микрофон',
  'Аналитика',
  'Мощная подсветка',
  'Оптический зум',
  'HD-качество',
  'Антивандальность',
]

class FunctionsQuestion extends React.Component {
  render() {
    const { values, onChange } = this.props

    return (
      <FormGroup onChange={onChange}>
        <Grid container spacing={8}>
          {data.map((label, idx) => (
            <Grid key={label} item xs={6}>
              <FormControlLabel
                name="requirements"
                value={idx.toString()}
                control={<Checkbox />}
                checked={values.has(idx.toString())}
                label={label}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    )
  }
}

export default withStyles(styles)(FunctionsQuestion)
