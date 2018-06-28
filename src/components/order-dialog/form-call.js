import React from 'react'
import Link from 'gatsby-link'
import MaskedInput from 'react-text-mask'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'

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

class CallForm extends React.Component {
  state = {
    step: 'name',
    data: {},
    valid: {},
  }

  nextStep = e => {
    e.preventDefault()

    const { onSubmit } = this.props
    const { step, data } = this.state

    if (step === 'name') {
      this.setState({ step: 'phone' })
    }

    if (step === 'phone') {
      onSubmit && onSubmit(data)
    }
  }

  validate(value, name) {
    const { valid } = this.state

    switch (name) {
      case 'name':
        valid[name] = value.length > 0
        this.setState({ valid })
        break
      case 'phone':
        valid[name] = value.replace(/[-_()\s*]/g, '').length === 12
        this.setState({ valid })
        break
    }
  }

  onChange = e => {
    const { value, name } = e.target
    const { data } = this.state
    data[name] = value
    this.setState({ data })
    this.validate(value, name)
  }

  renderStep() {
    const { step, data } = this.state

    switch (step) {
      case 'name':
        return (
          <TextField
            key="name"
            label="Имя"
            name="name"
            onChange={this.onChange}
            margin="normal"
            fullWidth
            required
            autoFocus
          />
        )
      case 'phone':
        return (
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="phone-mask-input" required focused shrink>
              Телефон
            </InputLabel>
            <Input
              value={data.phone}
              name="phone"
              onChange={this.onChange}
              id="phone-mask-input"
              inputComponent={TextMaskCustom}
              type="tel"
              required
              autoFocus
            />
            <FormHelperText>
              Нажимая на кнопку "отправить" вы соглашаетесь с{' '}
              <Link to="/privacy-policy">политикой конфиденциальности</Link>
            </FormHelperText>
          </FormControl>
        )
    }
  }

  render() {
    const { valid, step } = this.state

    return (
      <DialogContent>
        <DialogContentText id="order-dialog-description">
          Введите контактную информацию
        </DialogContentText>
        <form ref="form" onSubmit={this.nextStep}>
          {this.renderStep()}
          <DialogActions>
            <Button
              onClick={this.nextStep}
              color="primary"
              variant="contained"
              disabled={!valid[step]}
            >
              {step === 'phone' ? 'Отправить' : 'Далее'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    )
  }
}

export default CallForm
