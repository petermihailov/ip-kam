import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '../../../components/container/container'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({})

const steps = [
  'Ваш звонок или заявка на сайте',
  'Бесплатный выезд специалиста на объект',
  'Заключение договора',
  'Монтаж видеонаблюдения',
  'Обучение использованию',
]

const stepContent = [
  'Ваш звонок или заявка обрабатывается пару минут, мы свяжемся с Вами и проконсультируем',
  'Организуем бесплатный выезд специалиста в удобное для Вас время',
  'Подбираем необходимое оборудование, обсуждаем план проекта и заключаем договор',
  'Проводим монтаж оборудования с соблюдением договорных сроков',
  'Научим пользоваться оборудованием и ответим на Ваши вопросы',
]

class TimelineSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Container component="section">
        <Stepper orientation="vertical">
          {steps.map((label, idx) => {
            return (
              <Step key={label} active>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{stepContent[idx]}</Typography>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </Container>
    )
  }
}

export default withStyles(styles)(TimelineSection)
