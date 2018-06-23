import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

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
    const { classes } = this.props
    switch (step) {
      case 0:
        return (
          <RadioGroup
            name="type"
            value={this.state.data.type}
            onChange={this.onChange}
          >
            <FormControlLabel value="0" control={<Radio />} label="Квартира" />
            <FormControlLabel value="1" control={<Radio />} label="Аптека" />
            <FormControlLabel value="2" control={<Radio />} label="Коттедж" />
            <FormControlLabel value="3" control={<Radio />} label="Ресторан" />
            <FormControlLabel value="4" control={<Radio />} label="Магазин" />
            <FormControlLabel value="5" control={<Radio />} label="Мойка" />
            <FormControlLabel value="6" control={<Radio />} label="Стройка" />
            <FormControlLabel value="7" control={<Radio />} label="Другое" />
          </RadioGroup>
        )
      case 1:
        return (
          <FormGroup onChange={this.onChange}>
            <FormControl component="fieldset">
              <FormControlLabel
                name="requirements"
                value="0"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('0')}
                label="Удаленный доступ"
              />
              <FormControlLabel
                name="requirements"
                value="1"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('1')}
                label="Архив более 1 месяца"
              />
              <FormControlLabel
                name="requirements"
                value="2"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('2')}
                label="Микрофон"
              />
              <FormControlLabel
                name="requirements"
                value="3"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('3')}
                label="Аналитика"
              />
              <FormControlLabel
                name="requirements"
                value="4"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('4')}
                label="Мощная подсветка"
              />
              <FormControlLabel
                name="requirements"
                value="5"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('5')}
                label="Оптический зум"
              />
              <FormControlLabel
                name="requirements"
                value="6"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('6')}
                label="Антивандальность"
              />
              <FormControlLabel
                name="requirements"
                value="7"
                control={<Checkbox />}
                checked={this.state.data.requirements.has('7')}
                label="HD-качество"
              />
            </FormControl>
          </FormGroup>
        )
      case 2:
        return (
          <FormGroup>
            <FormControl>
              <InputLabel
                htmlFor="outside-cams"
                shrink={Boolean(this.state.data.outsideCams)}
              >
                Внутренние камеры
              </InputLabel>
              <Select
                value={this.state.data.outsideCams}
                onChange={this.onChange}
                inputProps={{
                  name: 'outsideCams',
                  id: 'outside-cams',
                }}
              >
                <MenuItem value="0">Нет</MenuItem>
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="5-25">5-25</MenuItem>
                <MenuItem value="25-50">25-50</MenuItem>
                <MenuItem value="50-100">50-100</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel
                htmlFor="inside-cams"
                shrink={Boolean(this.state.data.insideCams)}
              >
                Уличные камеры
              </InputLabel>
              <Select
                value={this.state.data.insideCams}
                onChange={this.onChange}
                inputProps={{
                  name: 'insideCams',
                  id: 'inside-cams',
                }}
              >
                <MenuItem value="0">Нет</MenuItem>
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="5-25">5-25</MenuItem>
                <MenuItem value="25-50">25-50</MenuItem>
                <MenuItem value="50-100">50-100</MenuItem>
              </Select>
            </FormControl>
            <Button>Ничего не понимаю приезжайте</Button>
          </FormGroup>
        )
      case 3:
        return (
          <RadioGroup
            name="bonus"
            value={this.state.data.bonus}
            onChange={this.onChange}
          >
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="Расширенная гарантия"
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Камера в подарок"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Скидка на монтаж"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Микрофон в подарок"
            />
          </RadioGroup>
        )
      default:
        return 'Unknown step'
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
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Survey)
