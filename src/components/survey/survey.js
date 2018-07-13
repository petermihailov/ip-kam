import React, { Fragment } from 'react'
import withWidth from '@material-ui/core/withWidth'
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import TypeQuestion from './type-question'
import FunctionsQuestion from './functions-question'
import CamsQuestion from './cams-question'
import BonusQuestion from './bonus-question'

import primary from '@material-ui/core/colors/deepOrange'
import secondary from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    type: 'dark',
  },
})

const styles = theme => ({
  stepper: {
    background: 'none',
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 4,
    },
  },
  container: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 170,
      padding: `0 ${theme.spacing.unit * 4}px 0`,
    },
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
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

  isValidStep = () => {
    const { activeStep, data } = this.state

    if (activeStep === 2) {
      return data.insideCams || data.outsideCams
    }

    return true
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
    const { data } = this.state

    switch (step) {
      case 0:
        return <TypeQuestion value={data.type} onChange={this.onChange} />
      case 1:
        return (
          <FunctionsQuestion
            values={data.requirements}
            onChange={this.onChange}
          />
        )
      case 2:
        return (
          <CamsQuestion
            outsideCams={data.outsideCams}
            insideCams={data.insideCams}
            onChange={this.onChange}
          />
        )
      case 3:
        return <BonusQuestion value={data.bonus} onChange={this.onChange} />
    }
  }

  renderStep = idx => {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state
    const step = idx !== undefined ? idx : activeStep

    return (
      <Fragment>
        {this.getStepContent(step)}
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
              disabled={!this.isValidStep()}
            >
              {activeStep === steps.length - 1 ? 'Результат' : 'Далее'}
            </Button>
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    const { classes, width } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    const isHorizontal = width !== 'xs'

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Stepper
            className={classes.stepper}
            activeStep={activeStep}
            orientation={isHorizontal ? 'horizontal' : 'vertical'}
          >
            {steps.map((label, idx) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  {!isHorizontal ? (
                    <StepContent>{this.renderStep(idx)}</StepContent>
                  ) : (
                    <Fragment />
                  )}
                </Step>
              )
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <div className={classes.container}>
              <Typography>
                🎉 All steps completed - you&quot;re finished 🎉
              </Typography>
            </div>
          ) : isHorizontal ? (
            <div className={classes.container}>{this.renderStep()}</div>
          ) : null}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(withWidth()(Survey))
