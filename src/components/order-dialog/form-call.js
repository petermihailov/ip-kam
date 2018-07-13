import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'

import NameQuestion from './name-question'
import PhoneQuestion from './phone-question'
import CommentQuestion from './comment-question'

const styles = theme => ({})

class CallForm extends Component {
  state = {
    step: 0,
    data: {},
    valid: {},
    isLastStep: false,
  }

  steps = ['name', 'phone', 'comment']

  setLastStep = isLastStep => {
    const { setPolicyVisibility } = this.props
    this.setState({ isLastStep }, () => setPolicyVisibility(isLastStep))
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({ step: step + 1 }, () => this.setLastStep(true))
  }

  validate(value, name) {
    const { valid } = this.state

    switch (name) {
      case this.steps[0]:
        valid[name] = value.trim().length > 0
        this.setState({ valid: { ...valid } })
        break
      case this.steps[1]:
        valid[name] = value.replace(/[-_()\s*]/g, '').length === 12
        this.setState({ valid: { ...valid } })
        break
      default:
        valid[name] = true
        this.setState({ valid: { ...valid } })
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

  submitHandler = e => {
    e.preventDefault()
    const { onSubmit } = this.props
    const { data, isLastStep } = this.state

    isLastStep ? onSubmit(data) : this.nextStep()
  }

  renderStep() {
    const { step, data } = this.state

    switch (step) {
      case 0:
        return <NameQuestion onChange={this.onChange} />
      case 1:
        return (
          <PhoneQuestion
            value={data.phone}
            onChange={this.onChange}
            setLastStep={this.setLastStep}
          />
        )
      case 2:
        return <CommentQuestion onChange={this.onChange} />
    }
  }

  render() {
    const { classes } = this.props
    const { valid, step, isLastStep } = this.state

    return (
      <DialogContent className={classes.dialog}>
        <DialogContentText id="order-dialog-description">
          Заполните необходимые поля
        </DialogContentText>
        <form ref="form" onSubmit={this.submitHandler}>
          {this.renderStep()}
          <DialogActions>
            <Button
              fullWidth
              onClick={this.submitHandler}
              color="primary"
              variant="contained"
              disabled={!valid[this.steps[step]]}
            >
              {isLastStep ? 'Отправить' : 'Далее'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    )
  }
}

export default withStyles(styles)(CallForm)
