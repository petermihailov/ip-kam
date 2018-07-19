import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import MaskedInput from 'react-text-mask'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const styles = theme => ({})

function TextMaskCustom(props) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        '+',
        '7',
        ' ',
        '(',
        /\d/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      showMask
    />
  )
}

export class PhoneField extends Component {
  render() {
    const { value, onChange, fullWidth } = this.props

    return (
      <FormControl fullWidth={fullWidth}>
        <InputLabel htmlFor="phone-mask-input" required focused shrink>
          Телефон
        </InputLabel>
        <Input
          value={value}
          name="phone"
          onChange={onChange}
          id="phone-mask-input"
          inputComponent={TextMaskCustom}
          type="tel"
          required
          autoFocus
        />
      </FormControl>
    )
  }
}

class PhoneQuestion extends Component {
  onCommentChange = (e, value) => {
    const { onChange, setLastStep } = this.props
    const { name } = e.target

    setLastStep(!value)

    onChange({ target: { name, value } })
  }

  render() {
    const { value, onChange } = this.props
    return (
      <Fragment>
        <PhoneField value={value} onChange={onChange} fullWidth />
        <FormControl fullWidth>
          <FormControlLabel
            control={
              <Switch name="showComment" onChange={this.onCommentChange} />
            }
            label="Оставить комментарий"
          />
        </FormControl>
      </Fragment>
    )
  }
}

export default withStyles(styles)(PhoneQuestion)
