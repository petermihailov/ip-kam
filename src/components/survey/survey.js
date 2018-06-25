import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import TypeQuestion from './type-question'
import FunctionsQuestion from './functions-question'
import CamsQuestion from './cams-question'
import BonusQuestion from './bonus-question'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
})

function getSteps() {
  return [
    'Выберите объект',
    'Какие функции нужны?',
    'Укажите колличество камер',
    'Выберите бонус',
  ]
}

class Survey extends React.Component {
  state = {
    activeStep: 0,
    data: {
      requirements: new Set(),
    },
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    })
  }

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    })
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  onChange = e => {
    const { data } = this.state
    const { value, name, type } = e.target

    if (type === 'checkbox') {
      if (data[name].has(value)) {
        data[name].delete(value)
      } else {
        data[name].add(value)
      }
    } else {
      data[name] = value
    }
    this.setState({ data })
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <TypeQuestion value={this.state.data.type} onChange={this.onChange} />
        )
      case 1:
        return (
          <FunctionsQuestion
            values={this.state.data.requirements}
            onChange={this.onChange}
          />
        )
      case 2:
        return (
          <CamsQuestion
            outsideCams={this.state.data.outsideCams}
            insideCams={this.state.data.insideCams}
            onChange={this.onChange}
          />
        )
      case 3:
        return (
          <BonusQuestion
            value={this.state.data.bonus}
            onChange={this.onChange}
          />
        )
    }
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, idx) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {this.getStepContent(idx)}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Назад
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? 'Результат'
                          : 'Далее'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>🎉 All steps completed - you&quot;re finished 🎉</Typography>
          </Paper>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Survey)
