import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const data = [
  'Расширенная гарантия',
  'Камера в подарок',
  'Скидка на монтаж',
  'Микрофон в подарок',
]

const styles = theme => ({})

class BonusQuestion extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <RadioGroup name="bonus" value={value} onChange={onChange}>
        {data.map((label, idx) => (
          <FormControlLabel
            key={label}
            value={idx.toString()}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    )
  }
}

export default withStyles(styles)(BonusQuestion)
