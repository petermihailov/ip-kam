import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '../../../components/container/container'
import Survey from '../../../components/survey/survey'

const s = theme => ({})

const SurveySection = ({ classes }) => (
  <Container component="section" banner>
    <Typography align="center" variant="title" color="inherit">
      Пройдите тест и получите смету на установку видеонаблюдения
    </Typography>
    <Survey />
  </Container>
)

export default withStyles(s)(SurveySection)
