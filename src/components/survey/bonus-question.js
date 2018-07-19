import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'

export const data = [
  'Расширенная гарантия',
  'Камера в подарок',
  'Скидка 10% на монтаж',
  'Микрофон в подарок',
]

const styles = theme => ({})

class BonusQuestion extends Component {
  render() {
    const { value, onChange, disabled, disabledMessage } = this.props

    return (
      <Fragment>
        {disabled && <Typography>{disabledMessage}</Typography>}
        <RadioGroup name="bonus" value={value} onChange={onChange}>
          {data.map((label, idx) => (
            <FormControlLabel
              key={label}
              value={idx.toString()}
              control={<Radio />}
              label={label}
              disabled={disabled}
            />
          ))}
        </RadioGroup>
      </Fragment>
    )
  }
}

export default withStyles(styles)(BonusQuestion)
